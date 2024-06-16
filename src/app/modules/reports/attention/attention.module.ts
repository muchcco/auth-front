// attention.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AttentionComponent } from './attention.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';


const routes: Routes = [
  { path: '', component: AttentionComponent }
];

@NgModule({
  declarations: [AttentionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgSelectModule
    
  ]
})
export class AttentionModule { }
