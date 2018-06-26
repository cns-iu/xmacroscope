import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AislPersonaComponent } from './aisl-persona.component';

describe('AislPersonaComponent', () => {
  let component: AislPersonaComponent;
  let fixture: ComponentFixture<AislPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AislPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AislPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
