import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { Field } from '@ngx-dino/core';
import { FieldHoverService } from '../shared/field-hover.service';

@Component({
  selector: 'mav-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.sass']
})
export class AttributeSelectorComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private mappingKeySelection: string[] = [];

  @Input() fields: Field<any>[];

  constructor(service: FieldHoverService) {
    this.subscription = service.hovers.subscribe((fields) => {
      this.mappingKeySelection = fields;
    });
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectionClass(field: Field<any>): string {
    if (this.mappingKeySelection.length === 0) {
      return '';
    }
    for (const mappingKey of this.mappingKeySelection) {
      if (!!field.getBoundField(mappingKey)) {
        return 'selectable';
      }
    }
    return 'unselectable';
  }
}
