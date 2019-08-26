import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GVButtonGroupComponent } from './gv-button-group.component';

describe('GVButtonGroupComponent', () => {
  let component: GVButtonGroupComponent;
  let fixture: ComponentFixture<GVButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GVButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GVButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
