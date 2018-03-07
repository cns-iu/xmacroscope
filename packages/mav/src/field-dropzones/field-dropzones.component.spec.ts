import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDropzonesComponent } from './field-dropzones.component';

describe('FieldDropzonesComponent', () => {
  let component: FieldDropzonesComponent;
  let fixture: ComponentFixture<FieldDropzonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDropzonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDropzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
