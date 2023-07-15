import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerStandardComponent } from './container-standard.component';

describe('ContainerStandardComponent', () => {
  let component: ContainerStandardComponent;
  let fixture: ComponentFixture<ContainerStandardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerStandardComponent]
    });
    fixture = TestBed.createComponent(ContainerStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
