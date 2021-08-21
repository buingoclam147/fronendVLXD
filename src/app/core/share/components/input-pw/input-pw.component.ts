import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-pw',
  template: `
    <nz-input-group [nzSuffix]="suffixTemplate" [nzSize]="'large'" class="name-input-gr">
      <input
        [type]="passwordVisible ? 'text' : 'password'"
        nz-input
        [placeholder]="placeholder"
        [(ngModel)]="value"
        (ngModelChange)="onChange(value)"
      />
    </nz-input-group>
    <ng-template #suffixTemplate>
      <i nz-icon [nzType]="passwordVisible ? 'eye-invisible' : 'eye'" (click)="passwordVisible = !passwordVisible"></i>
    </ng-template>
  `,
  styles: [
    `
      i {
        cursor: pointer;
      }
      .name-input-gr {
    border-radius: 16px !important;
    height: 50px;
    padding: 16px;
  }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPwComponent),
      multi: true,
    }
  ]
})
export class InputPwComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  passwordVisible = false;
  value: string;
  onChange = (_: any) => { };
  onTouched = (_: any) => { };
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }
}
