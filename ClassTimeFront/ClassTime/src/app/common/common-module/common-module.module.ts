import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { MatRippleModule, MatInput, MatFormField, MatButton, MatButtonModule, MatFormFieldModule, MatInputModule, MatSpinner, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    ObserversModule,
    MatRippleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ObserversModule,
    MatRippleModule,
    MatInput,
    MatFormField,
    MatButton,
    MatSpinner
  ]
})
export class CommonModuleModule { }
