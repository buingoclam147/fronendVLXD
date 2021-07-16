import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  breadcrumb = {
    pagemain: '',
    pagechild: ''
  };

  isCollapsed = false;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(x => {
      if (x instanceof NavigationEnd) {
        console.log(x);
        this.refeshBread(x);
      }

    });
  }
  refeshBread(path): void {
    this.breadcrumb.pagemain = path.url.split('/')[1];
    this.breadcrumb.pagechild = path.url.split('/')[2];
  }
}
