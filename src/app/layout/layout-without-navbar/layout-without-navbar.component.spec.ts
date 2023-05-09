import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithoutNavbarComponent } from './layout-without-navbar.component';

describe('LayoutWithoutNavbarComponent', () => {
  let component: LayoutWithoutNavbarComponent;
  let fixture: ComponentFixture<LayoutWithoutNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutWithoutNavbarComponent]
    });
    fixture = TestBed.createComponent(LayoutWithoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
