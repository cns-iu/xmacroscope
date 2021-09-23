import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScreenComponent } from './display-screen.component';

describe('DisplayScreenComponent', () => {
  let component: DisplayScreenComponent;
  let fixture: ComponentFixture<DisplayScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayScreenComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
