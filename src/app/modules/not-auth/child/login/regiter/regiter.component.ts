import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    console.log(this.form);
  }

  buildForm() {
    this.form = this.fb.group({
      userName: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-z]{6,32}$/i),
        ],
        this.validateUserNameFromAPIDebounce.bind(this)
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[a-z]{6,32}$/i),
        ]
      ],
      checkPassword: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[a-z]{6,32}$/i)
        ]
      ],
    },
    {
      validators: this.validateControlsValue('password', 'checkPassword')
    }
    );
  }
  validateUsername(username: string): Observable<boolean> {
    console.log('Trigger API call');
    const existedUsers = ['trungvo', 'tieppt', 'chautran'];
    const isValid = existedUsers.every(x => x !== username);
    return of(isValid).pipe(delay(1000));
  }
  validateUserNameFromAPIDebounce(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return timer(300).pipe(
      switchMap(() =>
        this.validateUsername(control.value).pipe(
          map(isValid => {
            if (isValid) {
              return null;
            }
            return {
              usernameDuplicated: true
            };
          })
        )
      )
    );
  }
  validateControlsValue(firstControlName: string, secondControlName: string) {
    return (formGroup: FormGroup) => {
      const { value: firstControlValue } = formGroup.get(firstControlName);
      const { value: secondControlValue } = formGroup.get(secondControlName);
      return firstControlValue === secondControlValue
        ? null
        : {
          valueNotMatch: {
            firstControlValue,
            secondControlValue
          }
        };
    };
  }
}
