import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolListRoutingModule } from './school-list-routing.module';
import { SchoolListComponent } from './school-list.component';

@NgModule({
  declarations: [
    SchoolListComponent
  ],
  imports: [
    CommonModule,
    SchoolListRoutingModule
  ]
})
export class SchoolListModule { }
