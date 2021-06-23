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

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzLayoutModule,
    FormsModule
  ],
  declarations: [ShareComponent, NavbarComponent, FooterComponent, ColorDirective],
  exports: [NavbarComponent, FooterComponent, ColorDirective, NzGridModule, NzButtonModule, FormsModule, NzLayoutModule ]
})
export class ShareModule { }
