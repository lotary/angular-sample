import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import {ProductModule} from './products/product.module';
import { AppRoutingModule } from './/app-routing.module';
import { ProductRoutingModule } from './products/product-routing.module';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent
  ],
  imports: [
    ProductModule,
    BrowserModule, 
    HttpClientModule,
    ProductRoutingModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]  
})
export class AppModule { }
