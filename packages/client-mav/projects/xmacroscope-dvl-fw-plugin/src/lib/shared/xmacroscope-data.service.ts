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
  public readonly project: Project;
  public readonly messages: Observable<Message>;
  public readonly runStreamController: RunStreamController;

  constructor(@Inject(XMacroscopeProjectConfigService) private config) {
    const project = new XMacroscopeProject(config);
    this.project = project;
    this.runStreamController = project.runStreamController;
    this.messages = project.runStreamController.messageStream;
  }
}
