import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolLegendComponent } from './symbol-legend.component';

describe('SymbolLegendComponent', () => {
  let component: SymbolLegendComponent;
  let fixture: ComponentFixture<SymbolLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
