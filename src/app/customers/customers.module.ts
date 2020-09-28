import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent}
]

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }