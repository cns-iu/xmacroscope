import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IField } from '@ngx-dino/core';
@Component({
  selector: 'mav-field-dropzone',
  templateUrl: './field-dropzone.component.html',
  styleUrls: ['./field-dropzone.component.sass']
})
export class FieldDropzoneComponent implements OnInit {
  backgroundColor = 'inherit';

  @Input() label: String;
  @Input() fields: IField<any>[];
  @Input() field: IField<any>;
  @Output() fieldChange = new EventEmitter<IField<any>>();

  constructor() { }

  ngOnInit() { }

  fieldDropped(field: IField<any>) {
    this.field = this.fields[this.findFieldIndex(field.label)];
    this.fieldChange.emit(this.field);
  }

  onDragDropEvent(event: any) {
    if (event.type === 'drag-start') {
      this.backgroundColor = event.accepted ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)';
    } else {
      this.backgroundColor = 'inherit';
    }
  }

  get acceptsDrop() {
    return (field) => {
      return this.findFieldIndex(field.label) !== -1;
    };
  }

  private findFieldIndex(label: string): number {
    return this.fields.findIndex((field) => field.label === label);
  }
}
