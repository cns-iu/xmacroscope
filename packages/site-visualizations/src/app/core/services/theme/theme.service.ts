import { OverlayContainer } from '@angular/cdk/overlay';
import { ComponentRef, Inject, Injectable, InjectionToken, OnDestroy, Optional } from '@angular/core';


export interface ThemeOptions {
  theme?: string;
  default?: string;
}

export const THEME_OPTIONS = new InjectionToken<ThemeOptions>('Theme options');


@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  readonly defaultTheme: string;

  get theme(): string {
    return this.currentTheme;
  }
  set theme(theme: string) {
    const newTheme = theme || this.defaultTheme;
    const oldTheme = this.currentTheme;
    this.currentTheme = newTheme;
    this.switchTheme(this.elements, newTheme, oldTheme);
  }

  private readonly elements: HTMLElement[] = [];
  private currentTheme: string;

  constructor(@Inject(THEME_OPTIONS) options: ThemeOptions,
    @Optional() overlay: OverlayContainer | null,
  ) {
    this.defaultTheme = options.default ?? '';
    this.currentTheme = options.theme ?? this.defaultTheme;

    const overlayEl = overlay?.getContainerElement();
    if (overlayEl) {
      this.addElement(overlayEl);
    }
  }

  ngOnDestroy(): void {
    // Make a copy of the array since it is modified during the loop
    const elements = [...this.elements];
    for (const el of elements) {
      this.removeElement(el);
    }
  }

  addBootstrapComponent(ref: ComponentRef<unknown>): void {
    const el = ref.location.nativeElement as HTMLElement | null;
    if (el) {
      this.addElement(el);
      ref.onDestroy(() => this.removeElement(el));
    }
  }

  addElement(el: HTMLElement): void {
    this.switchTheme([el], this.currentTheme, '');
    this.elements.push(el);
  }

  removeElement(el: HTMLElement): void {
    const index = this.elements.indexOf(el);
    if (index >= 0) {
      this.elements.splice(index, 1);
      this.switchTheme([el], '', this.currentTheme);
    }
  }

  private switchTheme(elements: HTMLElement[], newTheme: string, oldTheme: string): void {
    this.addClass(elements, 'color-transitions-disabled');
    this.removeClass(elements, oldTheme);
    this.addClass(elements, newTheme);
    setTimeout(() => this.removeClass(elements, 'color-transitions-disabled'));
  }

  private addClass(elements: HTMLElement[], klass: string): void {
    if (klass) {
      for (const el of elements) {
        el.classList.add(klass);
      }
    }
  }

  private removeClass(elements: HTMLElement[], klass: string): void {
    if (klass) {
      for (const el of elements) {
        el.classList.remove(klass);
      }
    }
  }
}
