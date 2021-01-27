import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { ValidateFieldService } from '../../services/validate-field.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent {
  @Input() label: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validate: ValidateFieldService) {}

  ngOnInit(): void {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
