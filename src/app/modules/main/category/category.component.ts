import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/share/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  isVisible = false;
  isData = false;
  isOkLoading = false;
  name = '';
  note = '';
  table = {
    pagination: {
      searchName: '',
      perPage: 5,
      page: 0
    },
    total: 0,
    data: [],
    isLoading: true
  };
  getCategory(): void {
    this.categoryService.getCategory(this.table.pagination).subscribe(x => {
      this.table.total = x.total;
      this.table.data = x.data;
      this.table.isLoading = false;
    });
  }
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  deleteRow(): void {
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  showData(): void {
    this.isData = true;
  }
  offShow(): void {
    this.isData = false;
  }
  pageIndexChange(value): void {
    this.table.isLoading = true;
    this.table.pagination.page = value - 1;
    console.log(value);
    this.getCategory();
  }
  pageSizeChange(value): void {
    this.table.isLoading = true;
    this.table.pagination.perPage = value;
    this.getCategory();
  }
  search(): void {
    this.getCategory();
    console.log(this.table.pagination.searchName);
  }
}

