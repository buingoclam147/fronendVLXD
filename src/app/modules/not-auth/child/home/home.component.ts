import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Pagination } from 'src/app/core/share/model/table.model';
import { ProductService } from 'src/app/core/share/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listNewProducts;
  profileForm: FormGroup;
  a = false;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
  ) {
  }
  ngOnInit(): void {
    this.caroselOn();
    this.profileForm = this.fb.group({
      email: '',
      name: '',
      phone: '',
      selectedValue: null
    });
    this.listNewProducts = this.productService.getProduct(new Pagination(3, 0), {});
  }
  caroselOn(): void {
    this.a = !this.a;
  }
}
