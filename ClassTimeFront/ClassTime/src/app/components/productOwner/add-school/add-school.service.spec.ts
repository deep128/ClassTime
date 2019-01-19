import { TestBed } from '@angular/core/testing';

import { AddSchoolService } from './add-school.service';

describe('AddSchoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSchoolService = TestBed.get(AddSchoolService);
    expect(service).toBeTruthy();
  });
});
