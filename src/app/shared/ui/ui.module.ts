import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { InputDateComponent } from './input-date/input-date.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';

@NgModule({
  declarations: [
    InputDateComponent,
    InputTextComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputTextareaComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    InputDateComponent,
    InputTextComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputTextareaComponent,
  ],
})
export class UiModule {}
