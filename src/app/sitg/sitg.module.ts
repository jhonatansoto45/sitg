import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';

import { SitgRoutingModule } from './sitg-routing.module';
import { SitgComponent } from './sitg.component';


@NgModule({
  declarations: [
    SitgComponent
  ],
  imports: [
    CommonModule,
    SitgRoutingModule,
    SharedModule
  ]
})
export class SitgModule { }
