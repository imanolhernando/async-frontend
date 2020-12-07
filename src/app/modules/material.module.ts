import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    MatPaginatorModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
