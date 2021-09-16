import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROUTER_CONST } from '../../core/const/router.const';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  ROUTER_CONST = ROUTER_CONST;
  cookies = document.cookie;
  subscriptions: Subscription[] = [];
  breadcrumb = {
    pagemain: '',
    pagechild: ''
  };

  isCollapsed = false;
  constructor(
    private router: Router,
  ) {

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(this.router.events.subscribe(x => {
      if (x instanceof NavigationEnd) {
        this.refeshBread(x);
      }
    }));
    this.breadcrumb.pagemain = window.location.pathname.split('/')[1];
    this.breadcrumb.pagechild = window.location.pathname.split('/')[2];
  }
  refeshBread(path): void {
    this.breadcrumb.pagemain = path.url.split('/')[1];
    this.breadcrumb.pagechild = path.url.split('/')[2];
  }
  logout(): void {
    localStorage.removeItem('userId');
  }
}
