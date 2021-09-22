import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { filter, map } from 'lodash';
import { Observable } from 'rxjs';

import { defaultIcons } from './default-icons';
import { RegisterIcon, RegistrationError, RegistrationSuccess } from './icon-registry.action';
import { IconDefinition } from './icon-registry.model';

/**
 * Determines the `MatIconRegistry` method and arguments to invoke for a specific `IconDefinition`.
 *
 * @param definition The definition for which to determine the appropriate method and arguments.
 * @returns An object containing the `MatIconRegistry` method name and argument to invoke it with.
 */
function getRegistrationMethod({ name, namespace, url, html }: IconDefinition): { methodName: string; args: unknown[] } {
  if (!url && !html) {
    throw new Error('IconDefinition must have either an url or html');
  }

  let methodName: string;
  if (name && namespace) {
    methodName = url ? 'addSvgIconInNamespace' : 'addSvgIconLiteralInNamespace';
  } else if (name) {
    methodName = url ? 'addSvgIcon' : 'addSvgIconLiteral';
  } else if (namespace) {
    methodName = url ? 'addSvgIconSetInNamespace' : 'addSvgIconSetLiteralInNamespace';
  } else {
    methodName = url ? 'addSvgIconSet' : 'addSvgIconSetLiteral';
  }

  return { methodName, args: filter([namespace, name, url || html]) };
}

/**
 * State handling the registration of icons for use with `mat-icon`.
 */
@State({ name: 'iconRegistry' })
@Injectable()
export class IconRegistryState implements NgxsOnInit {
  /**
   * Creates an instance of icon registry state.
   *
   * @param registry Material icon registry.
   * @param sanitizer Service used to sanitize urls and html.
   */
  constructor(private registry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  /**
   * Ngxs' OnInit hook.
   * Registers the default icons.
   *
   * @param context The state context.
   */
  ngxsOnInit({ dispatch }: StateContext<{}>) {
    const { sanitizer } = this;
    const actions = map(defaultIcons, def => new RegisterIcon({
      ...def,
      url: def.url && sanitizer.bypassSecurityTrustResourceUrl(def.url),
      html: def.html && sanitizer.bypassSecurityTrustHtml(def.html)
    }));

    dispatch(actions);
  }

  /**
   * Handle `RegisterIcon` actions.
   *
   * @param context The state context.
   * @param action The `RegisterIcon` action.
   */
  @Action(RegisterIcon)
  registerIcon({ dispatch }: StateContext<{}>, { definition }: RegisterIcon): Observable<void> {
    try {
      const { methodName, args } = getRegistrationMethod(definition);

      this.registry[methodName](...args);
      return dispatch(new RegistrationSuccess());
    } catch (error) {
      return dispatch(new RegistrationError(error));
    }
  }
}
