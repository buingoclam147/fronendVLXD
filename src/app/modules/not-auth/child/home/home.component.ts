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
  isCarosel = true;
  items;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
  ) {
    this.items = [
      {
        title: 'Vật liệu xây dựng',
        content: 'Chuyên gia vật liệu xây dựng trong chung cư, biệt thự, khách sạn'
      },
      {
        title: 'Sản phẩm nội thất',
        content: 'Chất lượng tuyệt đối trong vật liệu, thiết kế và dịch vụ'
      }
    ];
  }
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email: '',
      name: '',
      phone: '',
      selectedValue: null,
      content: ''
    });
    this.listNewProducts = this.productService.getProduct(new Pagination(3, 0), {});
  }
  caroselOn(): void {
    this.isCarosel = !this.isCarosel;
  }
}
