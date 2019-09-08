import { TestBed } from '@angular/core/testing';

import { LecturesResolverService } from './lectures-resolver.service';

describe('ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecturesResolverService = TestBed.get(LecturesResolverService);
    expect(service).toBeTruthy();
  });
});
