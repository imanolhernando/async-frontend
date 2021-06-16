import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';
import { RepoRoutingModule } from './repo-routing.module';
import { RepoComponent } from './repo.component';

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
