import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { AuthService } from 'src/app/core/share/service/auth.service';
import { CustomerService } from 'src/app/core/share/service/customer.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {
  currentUser;
  constructor(
    private auth: AuthService,
    private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.currentUser$.subscribe(idUser => {
      this.currentUser = this.customer.getOneCustomer(idUser);
    });
  }
  logout(): void {
    this.auth.logout();
  }
}
