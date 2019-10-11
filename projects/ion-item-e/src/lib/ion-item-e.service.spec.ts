import { TestBed } from '@angular/core/testing';

import { IonItemEService } from './ion-item-e.service';

describe('IonItemEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonItemEService = TestBed.get(IonItemEService);
    expect(service).toBeTruthy();
  });
});
