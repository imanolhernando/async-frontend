import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

// export function urlValidator(): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } | null =>
//         (control.value.indexOf('https://github.com/') || control.value.indexOf('github.com/')) ?  {urlError: control.value} : null;
// }



const REGEX = new RegExp( ('^(https:\/\/)?(http:\/\/)?(github.com\/)[a-z,-]+(\/)+[a-z,-]+'));

export function urlValidator(control: AbstractControl): ValidationErrors | null {
        if(REGEX.test(control.value)) {
            return null
        } else {
            return {urlError: true}
        }
    
}
