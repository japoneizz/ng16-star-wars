import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnoUiComponent } from './ono-ui.component';

describe('OnoUiComponent', () => {
  let component: OnoUiComponent;
  let fixture: ComponentFixture<OnoUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnoUiComponent]
    });
    fixture = TestBed.createComponent(OnoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
