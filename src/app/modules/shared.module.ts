import { BuscadorComponent } from '../components/buscador/buscador.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    BuscadorComponent
  ],
  exports: [
    BuscadorComponent
  ],
})
export class SharedModule { }
