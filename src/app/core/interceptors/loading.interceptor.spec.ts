import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  // let httpMock: HttpTestingController;

  // let service: ApiService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoadingInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents()
  );

  beforeEach(() => {
    // service = TestBed.inject(ApiService);
    // httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });

  // it('should add an Authorization header', () => {

  //   service.getRepo('angular','angular').pipe(
  //     take(1),
  //   ).toPromise()
  //    .then(res => {
  //     expect(spinnerServiceSpy.show).toHaveBeenCalledTimes(1);
  //   }).finally(()=> {

  //      expect(spinnerServiceSpy.hide).toHaveBeenCalledTimes(1)} );
  // });
});
