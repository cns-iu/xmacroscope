import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IField } from '../../dino-core';

@Component({
  selector: 'mav-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.sass']
})
export class AttributeSelectorComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<IField<any>> = new MatTableDataSource();
  constructor() { }

  ngOnInit() { }
}
