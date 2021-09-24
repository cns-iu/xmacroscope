import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { pluck, take } from 'rxjs/operators';
import { Visualization } from 'src/app/core/state/visualizations/visualizations';

import { VisualizationsState } from '../../core/state/visualizations/visualizations.state';


@Injectable({ providedIn: 'root' })
export class VisualizationDataResolver implements Resolve<Visualization> {
  constructor(private readonly service: VisualizationsState) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Visualization> {
    const id = route.paramMap.get('id');
    if (id === null) {
      return EMPTY;
    }

    return this.service.entities$.pipe(
      pluck(id),
      take(1)
    );
  }
}
