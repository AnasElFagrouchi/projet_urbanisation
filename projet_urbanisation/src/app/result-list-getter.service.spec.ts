/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResultListGetterService } from './result-list-getter.service';

describe('Service: ResultListGetter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultListGetterService]
    });
  });

  it('should ...', inject([ResultListGetterService], (service: ResultListGetterService) => {
    expect(service).toBeTruthy();
  }));
});
