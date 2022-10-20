import { TestBed } from '@angular/core/testing';

import { CourseCompanyService } from './course-company.service';

describe('CourseCompanyService', () => {
  let service: CourseCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
