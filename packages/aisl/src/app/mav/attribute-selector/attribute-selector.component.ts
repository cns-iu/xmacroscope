import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { IField } from '../../dino-core';
import { FieldHoverService } from '../shared/field-hover.service';

@Component({
  selector: 'mav-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.sass']
})
export class AttributeSelectorComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private fieldHoverSelection: IField<any>[] = [];

  @Input() dataSource: MatTableDataSource<IField<any>> = new MatTableDataSource();

  constructor(service: FieldHoverService) {
    this.subscription = service.hovers.subscribe((fields) => {
      this.fieldHoverSelection = fields;
    });
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  bgColorFor(field: IField<any>): string {
    if (this.fieldHoverSelection.length === 0) {
      return 'inherit';
    } else if (this.fieldHoverSelection.find((f) => f.label === field.label)) {
      return 'rgba(0,255,0,0.1)';
    } else {
      return 'rgba(255,0,0,0.1)';
    }
  }
}
