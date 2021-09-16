import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { AuthService } from 'src/app/core/share/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage = false;
  checked = false;
  passwordVisible = false;
  formEverything: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formEverything = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  login(): void {
    this.auth.login(this.formEverything.value).subscribe(
      x => {
        const timeNow = new Date(new Date().getTime() + 900000).toUTCString();
        this.router.navigate([ROUTER_CONST.MAIN.CATEGORY.ROOT]);
        document.cookie = `status = ${x.role}; expires = ${timeNow}`;
        this.auth.loginEmploye(x);
      },
      error => {
        this.errorMessage = true;
        console.log('err login: ', error);
      });
  }
}
