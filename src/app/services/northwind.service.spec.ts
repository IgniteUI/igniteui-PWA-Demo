import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindService } from './northwind.service';

describe('NorthwindService', () => {
  let service: NorthwindService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(NorthwindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
