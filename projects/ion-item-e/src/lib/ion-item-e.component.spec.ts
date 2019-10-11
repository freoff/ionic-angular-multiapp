import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonItemEComponent } from './ion-item-e.component';

describe('IonItemEComponent', () => {
  let component: IonItemEComponent;
  let fixture: ComponentFixture<IonItemEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonItemEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonItemEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
