import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDropzoneComponent } from './field-dropzone.component';

describe('FieldDropzoneComponent', () => {
  let component: FieldDropzoneComponent;
  let fixture: ComponentFixture<FieldDropzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDropzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
