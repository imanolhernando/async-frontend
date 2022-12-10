import { UntypedFormControl } from "@angular/forms";
import { urlValidator } from ".";


describe('urlValidator', () => {
  

  it('return error if incorrect value', () => {

    expect(urlValidator(new UntypedFormControl('1')))
    .toEqual(  {urlError: true} );

  });

  

  it('return null if correct value', () => {

    expect(urlValidator(new UntypedFormControl('github.com/angular/angular')))
    .toEqual( null );

  });

});
