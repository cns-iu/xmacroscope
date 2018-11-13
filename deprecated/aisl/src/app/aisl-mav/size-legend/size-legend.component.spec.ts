import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeLegendComponent } from './size-legend.component';

describe('SizeLegendComponent', () => {
  let component: SizeLegendComponent;
  let fixture: ComponentFixture<SizeLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
