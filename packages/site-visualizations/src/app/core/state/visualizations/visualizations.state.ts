import { Injectable } from '@angular/core';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataEntityCollectionsRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';

import { Visualization, visualizations } from './visualizations';


@StateRepository()
@State({
  name: 'visualizations'
})
@Injectable()
export class VisualizationsState extends NgxsDataEntityCollectionsRepository<Visualization, string>{
  ngxsOnInit(): void {
    this.setAll(visualizations);
  }
}
