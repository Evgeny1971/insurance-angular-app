import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HelloService } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HelloService]
    });
    service = TestBed.inject(HelloService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch hello message from API', () => {
    const testMessage = 'Hello from API';

    service.getHelloMessage().subscribe(message => {
      expect(message).toBe(testMessage);
    });

    const req = httpMock.expectOne('http://localhost:5000/api/Values');
    expect(req.request.method).toBe('GET');
    req.flush(testMessage);
  });
});
