export class Message {
  type: string;
  timestamp: Date;

  constructor(options: any = {}) {
    Object.assign(this, {
      timestamp: new Date()
    }, options);
  }
}
