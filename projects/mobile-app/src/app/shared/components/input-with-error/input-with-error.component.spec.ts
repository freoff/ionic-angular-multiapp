/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputWithErrorComponent } from './input-with-error.component';

describe('InputWithErrorComponent', () => {
  let component: InputWithErrorComponent;
  let fixture: ComponentFixture<InputWithErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
