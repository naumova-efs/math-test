/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {MultiplicationTestService, MathTestService} from './math-test.service';

describe('MathTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiplicationTestService]
    });
  });

  it('should ...', inject([MultiplicationTestService], (service: MathTestService) => {
    expect(service).toBeTruthy();
  }));
});
