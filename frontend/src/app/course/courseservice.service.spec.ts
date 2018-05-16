import { TestBed, inject } from '@angular/core/testing';

import { CourseserviceService } from './courseservice.service';

describe('CourseserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseserviceService]
    });
  });

  it('should be created', inject([CourseserviceService], (service: CourseserviceService) => {
    expect(service).toBeTruthy();
  }));
});
