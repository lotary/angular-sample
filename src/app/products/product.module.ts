import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
        },
      ]
    ),
    FormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ]
})
export class ProductModule { }
