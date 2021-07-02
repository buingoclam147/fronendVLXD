import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
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
    NzModalModule
  ],
  declarations: [
    ShareComponent,
    NavbarComponent,
    FooterComponent,
    ColorDirective,
  ],
  exports: [
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
    NzModalModule
  ]
})
export class ShareModule { }
