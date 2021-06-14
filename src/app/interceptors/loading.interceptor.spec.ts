import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, take } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {

  
  let ngxSpinnerService: NgxSpinnerService;
  let httpMock: HttpTestingController;

  let service: ApiService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      NgxSpinnerService,
      LoadingInterceptor,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true,
      },
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
  }).compileComponents()
  );

  beforeEach(() => {
    ngxSpinnerService = TestBed.inject(NgxSpinnerService);
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should add an Authorization header', () => {
    const spinnerServiceSpy = jasmine.createSpyObj(ngxSpinnerService, ['show', 'hide']);

    service.getRepo('angular','angular').pipe(
      take(1),  
    ).toPromise()
     .then(res => {
      expect(spinnerServiceSpy.show).toHaveBeenCalledTimes(1);
    }).finally(()=> {
      
       expect(spinnerServiceSpy.hide).toHaveBeenCalledTimes(1)} );
  });

});


