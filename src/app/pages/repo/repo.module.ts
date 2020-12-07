import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoRoutingModule } from './repo-routing.module';
import { RepoComponent } from './repo.component';
import { MaterialModule } from '../../modules/material.module';

@NgModule({
  declarations: [RepoComponent],
  imports: [
    CommonModule,
    RepoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class RepoModule { }
