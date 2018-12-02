import { Inject, Injectable } from '@angular/core';
import { Project } from '@dvl-fw/core';
import { Observable } from 'rxjs';

import { Message } from './message';
import { RunStreamController } from './run-stream-controller';
import { XMacroscopeProject } from './xmacroscope-project';
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
