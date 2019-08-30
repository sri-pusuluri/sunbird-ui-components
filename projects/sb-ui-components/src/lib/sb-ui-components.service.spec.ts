import { TestBed } from '@angular/core/testing';

import { SbUiComponentsService } from './sb-ui-components.service';

describe('SbUiComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SbUiComponentsService = TestBed.get(SbUiComponentsService);
    expect(service).toBeTruthy();
  });
});
