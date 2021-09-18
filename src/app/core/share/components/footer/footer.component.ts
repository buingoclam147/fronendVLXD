import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ROUTER_CONST = ROUTER_CONST;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
