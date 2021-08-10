import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-area',
  templateUrl: './breadcrumb-area.component.html',
  styleUrls: ['./breadcrumb-area.component.scss']
})
export class BreadcrumbAreaComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
