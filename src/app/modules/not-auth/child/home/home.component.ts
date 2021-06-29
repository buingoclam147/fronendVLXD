import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  email?: string;
  a = false;
  selectedValue = null;
  constructor() {
  }
  ngOnInit(): void {
    this.caroselOn();
  }
  caroselOn(): void {
    this.a = !this.a;
  }
}
