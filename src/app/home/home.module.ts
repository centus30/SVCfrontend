import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RegInputComponent } from './components/reg-input/reg-input.component';
import { SiteBenefitsComponent } from './components/site-benefits/site-benefits.component';
import { AboutComponent } from './components/about/about.component';

const routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    RegInputComponent,
    SiteBenefitsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
