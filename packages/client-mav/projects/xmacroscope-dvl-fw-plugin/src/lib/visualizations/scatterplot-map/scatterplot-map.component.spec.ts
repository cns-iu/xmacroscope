import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterplotMapComponent } from './scatterplot-map.component';

describe('ScatterplotMapComponent', () => {
  let component: ScatterplotMapComponent;
  let fixture: ComponentFixture<ScatterplotMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterplotMapComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterplotMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
