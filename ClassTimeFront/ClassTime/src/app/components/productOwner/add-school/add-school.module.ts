import { NgModule } from '@angular/core';

import { AddSchoolRoutingModule } from './add-school-routing.module';
import { CommonModuleModule } from '../../../common/common-module/common-module.module';
import { AddSchoolComponent } from './add-school.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddSchoolComponent
  ],
  imports: [
    CommonModuleModule.forRoot(),
    AddSchoolRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddSchoolModule { }
