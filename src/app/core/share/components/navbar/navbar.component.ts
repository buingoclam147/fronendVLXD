import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { Pagination } from '../../model/table.model';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name = new FormControl('');
  bodyStyle = {
    height: '60px',
    with: '160px',
    marginTop: '180px',
    padding: '0',
  };
  isVisible = false;
  categoryUrl = {};
  ROUTER_CONST = ROUTER_CONST;
  listCategory;
  isShowMiddleNav = false;
  constructor(
    private router: Router,
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
  navToProduct(id): void {
    this.categoryUrl = { categoryId: id };
    this.router.navigate([ROUTER_CONST.NOT_AUTH.PRODUCT.ROOT], { queryParams: this.categoryUrl });
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  searchPr(): void {
    const name = {name: this.name.value};
    this.router.navigate([ROUTER_CONST.NOT_AUTH.PRODUCT.ROOT], { queryParams: name });
    this.name = new FormControl('');
    this.isVisible = false;
  }
}
