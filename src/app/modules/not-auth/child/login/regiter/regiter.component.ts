import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, of, timer } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { AuthService } from 'src/app/core/share/service/auth.service';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent implements OnInit {
  form: FormGroup;
  errorMessage = false;
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private auth: AuthService,
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
          Validators.pattern(/^[a-z0-9_-]{6,32}$/i),
        ],
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[a-z0-9_-]{8,32}$/i)
        ]
      ],
      checkPassword: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[a-z0-9_-]{8,32}$/i)
        ]
      ],
    },
    {
      validators: this.validateControlsValue('password', 'checkPassword')
    }
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
  createAccount(): void {
    if (this.form.value.password === this.form.value.checkPassword) {
      this.auth.createAccount(this.form.value).subscribe(x => {
        if (x) {
          this.message.success('Đăng ký tài khoản thành công!', {
            nzDuration: 6000
          });
          this.router.navigate([ROUTER_CONST.NOT_AUTH.LOGIN]);
        }
      },
        err => {
          console.log(err);
          this.errorMessage = true;
        }
      );
    }
  }
}
