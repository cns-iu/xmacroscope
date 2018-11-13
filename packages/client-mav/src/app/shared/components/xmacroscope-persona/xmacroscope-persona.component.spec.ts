import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMacroscopePersonaComponent } from './xmacroscope-persona.component';

describe('XMacroscopePersonaComponent', () => {
  let component: XMacroscopePersonaComponent;
  let fixture: ComponentFixture<XMacroscopePersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMacroscopePersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMacroscopePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
