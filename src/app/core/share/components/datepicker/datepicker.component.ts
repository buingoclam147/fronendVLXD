import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerComponent),
  multi: true,
};
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [provider]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {
  dateOfBirth = null;
  onChange = (value: any) => { };
  onChanges = (result: Date) => {
    const dateTime = new Date(result).getTime();
    this.onChange(dateTime);
  }
  constructor() { }
  writeValue(obj: any): void {
    this.dateOfBirth = obj === null ?  null : new Date(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnInit(): void {
  }
}
