import { TestBed } from '@angular/core/testing';

import { DataVariableHoverService } from './data-variable-hover.service';

describe('DataVariableHoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataVariableHoverService = TestBed.get(DataVariableHoverService);
    expect(service).toBeTruthy();
  });
});
