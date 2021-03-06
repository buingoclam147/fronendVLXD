import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ColorDirective } from './directivate/color.directive';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { CategoryPipe } from './pipes/category.pipe';
import { SupplierPipe } from './pipes/supplier.pipe';
import { NzImageModule } from 'ng-zorro-antd/image';
import { MoneyPipe } from './pipes/money.pipe';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterModule } from '@angular/router';
import { BreadcrumbAreaComponent } from './components/breadcrumb-area/breadcrumb-area.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { MethodShopComponent } from './components/method-shop/method-shop.component';
import { InputPwComponent } from './components/input-pw/input-pw.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { StatusPipe } from './pipes/status.pipe';
import { InformationPipe } from './pipes/Information.pipe';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzLayoutModule,
    FormsModule,
    NzBadgeModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzTableModule,
    NzPopconfirmModule,
    NzModalModule,
    NzPaginationModule,
    NzSpinModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzAlertModule,
    NzUploadModule,
    NzSelectModule,
    NzSliderModule,
    NzImageModule,
    NzDatePickerModule,
    NzRadioModule,
    NzCheckboxModule,
    NzCarouselModule,
    NzBackTopModule,
    NzDropDownModule,
    RouterModule,
    NzCardModule,
    NzEmptyModule,
    NzNotificationModule,
    NzDrawerModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ColorDirective,
    CategoryPipe,
    SupplierPipe,
    MoneyPipe,
    DatepickerComponent,
    FormControlErrorComponent,
    BreadcrumbAreaComponent,
    InputNumberComponent,
    MethodShopComponent,
    InputPwComponent,
    NewProductComponent,
    StatusPipe,
    InformationPipe

  ],
  exports: [
    InputPwComponent,
    NavbarComponent,
    FooterComponent,
    NzMenuModule,
    ColorDirective,
    NzGridModule,
    NzButtonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    NzBadgeModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzTableModule,
    NzPopconfirmModule,
    NzModalModule,
    NzPaginationModule,
    NzSpinModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzAlertModule,
    NzUploadModule,
    NzSelectModule,
    NzSliderModule,
    CategoryPipe,
    SupplierPipe,
    NzImageModule,
    MoneyPipe,
    NzDatePickerModule,
    DatepickerComponent,
    FormControlErrorComponent,
    NzRadioModule,
    NzCheckboxModule,
    NzCarouselModule,
    NzBackTopModule,
    NzDropDownModule,
    BreadcrumbAreaComponent,
    NzCardModule,
    NzEmptyModule,
    InputNumberComponent,
    MethodShopComponent,
    NewProductComponent,
    NzNotificationModule,
    StatusPipe,
    NzDrawerModule,
    InformationPipe
  ]
})
export class ShareModule { }
