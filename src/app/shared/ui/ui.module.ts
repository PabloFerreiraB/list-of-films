import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './alert/alert.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';

@NgModule({
  declarations: [
    AlertComponent,
    InputDateComponent,
    InputTextComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputTextareaComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    AlertComponent,
    InputDateComponent,
    InputTextComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputTextareaComponent,
  ],
})
export class UiModule {}
