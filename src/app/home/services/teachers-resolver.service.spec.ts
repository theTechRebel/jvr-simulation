import { TestBed } from '@angular/core/testing';

import { TeachersResolverService } from './teachers-resolver.service';

describe('TeachersResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeachersResolverService = TestBed.get(TeachersResolverService);
    expect(service).toBeTruthy();
  });
});
