import { Component, HostListener, OnInit } from '@angular/core';
import { Pagination } from '../../model/table.model';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  listCategory;
  scrollY = false;
  constructor(
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
  this.listCategory = this.categoryService.getCategory(new Pagination(20, 0), {});
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    window.scrollY > 500 ? this.scrollY = true : this.scrollY = false;
  }
  onTop(): void {
    window.scroll(0, 100);
  }
}
