import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  breadcrumb = {
    pagemain: '',
    pagechild: ''
  };

  isCollapsed = false;
  constructor(private router: Router) {

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
  }
  refeshBread(path): void {
    this.breadcrumb.pagemain = path.url.split('/')[1];
    this.breadcrumb.pagechild = path.url.split('/')[2];
  }
}
