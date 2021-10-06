import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ConvertUnitsComponent } from './components';
import { ConversorService } from './services';



@NgModule({
  declarations: [
    ConvertUnitsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConvertUnitsComponent
  ],
  providers: [
    ConversorService
  ]
})
export class ConversorModule { }
