import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alert = {
    title: 'Success!',
    description: 'Saved successfully',
    btnColorSuccess: 'warn',
    btnColorCancel: 'primary',
    btnSuccess: 'Ok',
    btnCancel: 'Cancel',
    existsBtnClose: false,
  } as Alert;

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.alert.title = this.data.title || this.alert.title;
      this.alert.description = this.data.description || this.alert.description;
      this.alert.btnColorSuccess =
        this.data.btnColorSuccess || this.alert.btnColorSuccess;
      this.alert.btnColorCancel =
        this.data.btnColorCancel || this.alert.btnColorCancel;
      this.alert.btnSuccess = this.data.btnSuccess || this.alert.btnSuccess;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;
      this.alert.existsBtnClose =
        this.data.existsBtnClose || this.alert.existsBtnClose;
    }
  }
}
