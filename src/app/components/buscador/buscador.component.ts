import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { urlValidator } from '../../validators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {

  @Output() url = new EventEmitter<string>();

  form: FormGroup;

  constructor( public formBuilder: FormBuilder ) { this.createForm();  }

  createForm(): void {
    this.form = new FormGroup({
      url:
        new FormControl(
          'https://github.com/irontec/ivozprovider',
          [ urlValidator(), Validators.required ])
    });
  }

  submit(): void {
    this.url.emit(this.form.value.url);
  }

}
