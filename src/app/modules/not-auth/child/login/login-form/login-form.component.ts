import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { AuthService } from 'src/app/core/share/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  formEverything: FormGroup;
  errorMessage = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formEverything = this.fb.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(6),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
    });
  }
  login(): void {
    this.auth.loginCustomer(this.formEverything.value).subscribe(
      x => {
        console.log(x.login);
        this.router.navigate([ROUTER_CONST.NOT_AUTH.HOME]);
      },
      error => {
        this.errorMessage = true;
        console.log('err login: ', error);
      });
  }
}
