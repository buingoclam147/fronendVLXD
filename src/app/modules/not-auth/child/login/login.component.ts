import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
enum ACTION {
  LOGIN,
  REGISTER
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  page = ACTION.LOGIN;
  constructor(

    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(x => this.page = x.register);
  }
}
