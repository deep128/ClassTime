import { NgModule } from '@angular/core';

import { SchoolListRoutingModule } from './school-list-routing.module';
import { SchoolListComponent } from './school-list.component';
import { CommonModuleModule } from '../../../common/common-module/common-module.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    SchoolListComponent
  ],
  imports: [
    CommonModuleModule.forRoot(),
    SchoolListRoutingModule,
    MatTableModule
  ]
})
export class SchoolListModule { }
