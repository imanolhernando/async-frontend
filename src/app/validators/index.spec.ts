import { FormControl } from "@angular/forms";
import { urlValidator } from ".";


describe('urlValidator', () => {
  

  it('return error if incorrect value', () => {

    expect(urlValidator(new FormControl('1')))
    .toEqual(  {urlError: true} );

  });

  

  it('return null if correct value', () => {

    expect(urlValidator(new FormControl('github.com/angular/angular')))
    .toEqual( null );

  });

});
