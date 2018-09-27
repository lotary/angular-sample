import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import {ProductModule} from './products/product.module';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent
  ],
  imports: [
    ProductModule,
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ], {useHash: true})
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]  
})
export class AppModule { }
