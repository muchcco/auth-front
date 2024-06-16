import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../modules/reports/content/header/header.component';
import { SidebarComponent } from '../modules/reports/content/sidebar/sidebar.component';
import { LayoutComponent } from '../modules/reports/content/layout/layout.component';
import { FooterComponent } from '../modules/reports/content/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    FooterComponent
  ]
})
export class SharedModule { }
