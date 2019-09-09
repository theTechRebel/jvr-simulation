import { TestBed } from '@angular/core/testing';

import { StudentsResolverService } from './students-resolver.service';

describe('StudentsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsResolverService = TestBed.get(StudentsResolverService);
    expect(service).toBeTruthy();
  });
});
