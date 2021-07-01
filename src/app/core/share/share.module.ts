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
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzLayoutModule,
    FormsModule,
    NzBadgeModule,
    NzMenuModule,
    NzIconModule
  ],
  declarations: [ShareComponent, NavbarComponent, FooterComponent, ColorDirective, MainFooterComponent],
  exports: [NavbarComponent, FooterComponent, MainFooterComponent, NzMenuModule,
    ColorDirective, NzGridModule, NzButtonModule, FormsModule, NzLayoutModule, NzIconModule]
})
export class ShareModule { }
