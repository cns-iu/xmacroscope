import {
  Component,
  OnInit,
  Input, Output,
  HostListener,
  EventEmitter
} from '@angular/core';

import { BoundField } from '@ngx-dino/core';
import { FieldHoverService } from '../shared/field-hover.service';

@Component({
  selector: 'mav-field-dropzone',
  templateUrl: './field-dropzone.component.html',
  styleUrls: ['./field-dropzone.component.sass']
})
export class FieldDropzoneComponent implements OnInit {
  backgroundColor = 'inherit';

  @Input() label: String;
  @Input() fields: BoundField<any>[];
  @Input() field: BoundField<any>;
  @Output() fieldChange = new EventEmitter<BoundField<any>>();

  constructor(private hoverService: FieldHoverService) { }

  ngOnInit() { }

  fieldDropped(field: BoundField<any>) {
    this.field = this.fields[this.findFieldIndex(field.label)];
    this.fieldChange.emit(this.field);
  }

  onDragDropEvent(event: any) {
    if (event.type === 'drag-start') {
      this.backgroundColor = event.accepted ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)';
    } else if (event.type === 'drag-end') {
      this.backgroundColor = 'inherit';
    }
  }

  @HostListener('mouseover', [])
  onMouseOver() {
    this.hoverService.startHover(this.fields);
  }

  @HostListener('mouseout', [])
  onMouseOut() {
    this.hoverService.endHover();
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
