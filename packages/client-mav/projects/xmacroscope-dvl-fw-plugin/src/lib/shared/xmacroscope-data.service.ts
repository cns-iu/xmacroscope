import { Project } from '@dvl-fw/core';
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { XMacroscopeProject, XMacroscopeProjectConfig } from './xmacroscope-project';
import { Message } from './message';
import { RunStreamController } from './run-stream-controller';
import { XMacroscopeProjectConfigService } from './xmacroscope-project-config.service';


// @dynamic
@Injectable()
export class XMacroscopeDataService {
  public project: Project;
  public messages: Observable<Message>;
  public runStreamController: RunStreamController;

  constructor(@Inject(XMacroscopeProjectConfigService) public config) {
    const project = this.project = new XMacroscopeProject(config);
    this.runStreamController = project.runStreamController;
    this.messages = project.runStreamController.messageStream;
  }
}
