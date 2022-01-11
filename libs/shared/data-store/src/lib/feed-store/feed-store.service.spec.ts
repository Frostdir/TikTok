import { TestBed } from '@angular/core/testing';

import { FeedStoreService } from './feed-store.service';

describe('FeedStoreService', () => {
  let service: FeedStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
