import { Component, HostListener, OnInit } from '@angular/core';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { Pagination } from '../../model/table.model';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ROUTER_CONST = ROUTER_CONST;
  listCategory;
  isShowMiddleNav = false;
  constructor(
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
  this.listCategory = this.categoryService.getCategory(new Pagination(20, 0), {});
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isShowMiddleNav = window.scrollY > 500;
  }
  onTop(): void {
    window.scroll(0, 100);
  }
}
