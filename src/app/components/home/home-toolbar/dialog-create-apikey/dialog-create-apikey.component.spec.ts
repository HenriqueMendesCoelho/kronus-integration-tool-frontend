import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateApikeyComponent } from './dialog-create-apikey.component';

describe('DialogCreateApikeyComponent', () => {
  let component: DialogCreateApikeyComponent;
  let fixture: ComponentFixture<DialogCreateApikeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateApikeyComponent]
    });
    fixture = TestBed.createComponent(DialogCreateApikeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
