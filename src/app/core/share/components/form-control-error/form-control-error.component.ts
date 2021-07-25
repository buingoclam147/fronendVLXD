import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss']
})
export class FormControlErrorComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() errorsMessage: {
    [key: string]: string
  };

  keys = [];

  constructor() { }

  ngOnInit(): void {
    this.keys = Object.keys(this.errorsMessage);
  }

  getFirstError(): string {
    return Object.keys(this.form.controls[this.controlName].errors)[0];
  }
}
