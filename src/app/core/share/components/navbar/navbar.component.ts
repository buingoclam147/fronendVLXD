import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { Pagination } from '../../model/table.model';
import { CategoryService } from '../../service/category.service';
import { AuthService } from 'src/app/core/share/service/auth.service';
import { CartStoreService } from '../../stores/cart-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  imgLogo = `<a (click)="close()" [routerLink]="[ROUTER_CONST.NOT_AUTH.HOME]">
  <img src="../../../../../assets//building-login.png" alt="logo" width="70px">
</a>`;
  visibleMenu = false;
  sumNum$ = this.cartStore.sumNum$;
  name = new FormControl('');
  curentId = false;
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
    public auth: AuthService,
    private cartStore: CartStoreService
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
    const name = { name: this.name.value };
    this.router.navigate([ROUTER_CONST.NOT_AUTH.PRODUCT.ROOT], { queryParams: name });
    this.name = new FormControl('');
    this.isVisible = false;
  }
  logout() {
    this.auth.logout();
  }
  selectLogin() {
  }
  onUser() {
    this.selectLogin();
  }

  open(): void {
    this.visibleMenu = true;
  }

  close(): void {
    this.visibleMenu = false;
  }
}
