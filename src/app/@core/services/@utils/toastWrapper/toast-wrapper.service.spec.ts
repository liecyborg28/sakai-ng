import { TestBed } from '@angular/core/testing';

import { ToastWrapperService } from './toast-wrapper.service';

describe('ToastWrapperService', () => {
  let service: ToastWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
