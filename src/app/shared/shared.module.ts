import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule

  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ]
})

export class SharedModule { }
