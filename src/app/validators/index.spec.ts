import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl } from '@angular/forms';
import { urlValidator } from '.';

describe('urlValidator', () => {
  // beforeEach(() => TestBed.configureTestingModule({
  //   providers: [
  //     urlValidator
  //   ],
  //   declarations:[],
  //   imports:[],
  //   schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  // }).compileComponents());

  // beforeEach(()=> {

  // })

  it('should be created', () => {
    expect(urlValidator()).toBeTruthy();
  });

});
