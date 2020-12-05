import {AbstractControl, ValidatorFn} from '@angular/forms';

export function urlValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>
        control.value.indexOf('https://github.com/') ?  {e: control.value} : null;
}
