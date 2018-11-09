import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { XMacroscopeProject } from './xmacroscope-project';
import { Message } from './message';


@Injectable({providedIn: 'root'})
export class XMacroscopeDataService {
  public readonly project: XMacroscopeProject;
  public readonly messageStream: Observable<Message>;

  constructor() {
    this.project = new XMacroscopeProject(true, false);
    this.messageStream = this.project.runStreamController.messageStream;
  }
}
