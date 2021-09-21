import { Inject, Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

import { XMacroscopeProject, XMacroscopeProjectConfig } from './xmacroscope-project';
import { XMacroscopeProjectConfigService } from './xmacroscope-project-config.service';


@Injectable()
export class XMacroscopeDataService {
  public project = new XMacroscopeProject(this.config);
  public runStreamController = this.project.runStreamController;
  public messages = this.runStreamController?.messageStream ?? EMPTY;

  constructor(@Inject(XMacroscopeProjectConfigService) public config: XMacroscopeProjectConfig) { }
}
