import {
  Component,
  OnInit,
  Input, Output,
  HostListener,
  EventEmitter
} from '@angular/core';

import { BoundField, Field } from '@ngx-dino/core';
import { FieldHoverService } from '../shared/field-hover.service';

@Component({
  selector: 'mav-field-dropzone',
  templateUrl: './field-dropzone.component.html',
  styleUrls: ['./field-dropzone.component.sass']
})
export class FieldDropzoneComponent implements OnInit {
  selectionClass = '';

  @Input() mappingKey: string;
  @Input() field: BoundField<any>;
  @Output() fieldChange = new EventEmitter<BoundField<any>>();

  constructor(private hoverService: FieldHoverService) { }

  ngOnInit() { }

  fieldDropped(field: Field<any>) {
    this.field = field.getBoundField(this.mappingKey);

    // FIXME: Remove this
    if (!this.field) {
      this.field = field.getBoundField();
    }
    this.fieldChange.emit(this.field);
  }

  onDragDropEvent(event: any) {
    if (event.type === 'drag-start') {
      this.selectionClass = event.accepted ? 'selectable' : 'unselectable'; // 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)';
    } else if (event.type === 'drag-end') {
      this.selectionClass = '';
    }
  }

  @HostListener('mouseover', [])
  onMouseOver() {
    this.hoverService.startHover([this.mappingKey]);
  }

  @HostListener('mouseout', [])
  onMouseOut() {
    this.hoverService.endHover();
  }

  get acceptsDrop() {
    return (field: Field<any>) => {
      return !!field.getBoundField(this.mappingKey);
    };
  }
}
