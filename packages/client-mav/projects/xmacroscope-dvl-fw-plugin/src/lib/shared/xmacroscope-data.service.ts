import { Project } from '@dvl-fw/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { XMacroscopeProject } from './xmacroscope-project';
import { Message } from './message';
import { RunStreamController } from './run-stream-controller';


@Injectable({providedIn: 'root'})
export class XMacroscopeDataService {
  public readonly project: Project;
  public readonly messages: Observable<Message>;
  public readonly runStreamController: RunStreamController;

  constructor() {
    const project = new XMacroscopeProject(false, false, 'http://localhost:4000/graphql');
    this.project = project;
    this.runStreamController = project.runStreamController;
    this.messages = project.runStreamController.messageStream;
  }
}
