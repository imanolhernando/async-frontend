import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MaterialModule } from '../../components/material.module';
import { getSpanishPaginatorIntl } from '../../../utils/paginator';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';

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
