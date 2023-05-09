import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithNavbarComponent } from './layout-with-navbar.component';

describe('LayoutWithNavbarComponent', () => {
  let component: LayoutWithNavbarComponent;
  let fixture: ComponentFixture<LayoutWithNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutWithNavbarComponent]
    });
    fixture = TestBed.createComponent(LayoutWithNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
