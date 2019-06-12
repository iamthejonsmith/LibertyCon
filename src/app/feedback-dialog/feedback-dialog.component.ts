import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {
  form: FormGroup;
  description: string;
  title: string;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<FeedbackDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.description = data.description;
    this.title = data.title;
  }

  submit() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []]
    });
  }

}
