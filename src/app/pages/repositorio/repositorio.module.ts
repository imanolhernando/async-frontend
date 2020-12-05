import { SharedModule } from '../../modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorioRoutingModule } from './repositorio-routing.module';
import { RepositorioComponent } from './repositorio.component';
import { MaterialModule } from './../../modules/material.module';


@NgModule({
  declarations: [
    RepositorioComponent
  ],
  imports: [
    CommonModule,
    RepositorioRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class RepositorioModule { }
