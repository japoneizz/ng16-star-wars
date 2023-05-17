import { TestBed } from '@angular/core/testing';

import { OnoUiService } from './ono-ui.service';

describe('OnoUiService', () => {
  let service: OnoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
