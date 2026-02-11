import { TestBed } from '@angular/core/testing';

import { LoadLocalizationResolver } from './load-localization.resolver';

describe('LoadLocalizationResolver', () => {
  let resolver: LoadLocalizationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoadLocalizationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
