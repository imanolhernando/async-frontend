import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl } from '@angular/forms';
import { urlValidator } from '.';

describe('urlValidator', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      urlValidator
      ]
  }));

  it('should be created', () => {
    expect(urlValidator()).toBeTruthy();
  });

});
