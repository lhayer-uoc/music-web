import { TestBed } from '@angular/core/testing';

import { SelectSongService } from './select-song.service';

describe('SelectSongService', () => {
  let service: SelectSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
