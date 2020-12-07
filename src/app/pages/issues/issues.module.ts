import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getSpanishPaginatorIntl } from '../../paginator/paginator';

@NgModule({
  declarations: [IssuesComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    MaterialModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }
  ]
})
export class IssuesModule { }
