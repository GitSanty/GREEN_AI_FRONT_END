import { TestBed } from '@angular/core/testing';

import { GreenAiApiService } from './green-ai-api.service';

describe('GreenAiApiService', () => {
  let service: GreenAiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenAiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
