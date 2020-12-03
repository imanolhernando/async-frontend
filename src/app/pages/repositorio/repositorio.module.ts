import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositorioRoutingModule } from './repositorio-routing.module';
import { RepositorioComponent } from './repositorio.component';


@NgModule({
  declarations: [RepositorioComponent],
  imports: [
    CommonModule,
    RepositorioRoutingModule
  ]
})
export class RepositorioModule { }
