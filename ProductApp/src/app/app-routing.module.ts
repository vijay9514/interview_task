import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTableComponent } from './product-table/product-table.component';

const routes: Routes = [
  {path:'',redirectTo:'product', pathMatch: 'full' },
  {path:'product',component:ProductTableComponent},
  {path:'product/products/:id/edit',component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
