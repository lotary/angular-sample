import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct;
  errorMessage: String;
  
  constructor(private route: ActivatedRoute ,
    private router: Router,
    private productService: ProductService) {
    console.log ('inside constructor  :  id= ' + this.route.snapshot.paramMap.get('id'));
 
   }

  ngOnInit() {
    
    let id = +this.route.snapshot.paramMap.get('id');
    console.log ('in Ng on Init :  '  + id);
    this.pageTitle += `: ${id}`;
    
    this.productService.getProductById(id).subscribe(
      product => {
          this.product = product
      },
      error => this.errorMessage =<any>error
    )
  };

      
  
  onBack(): void {
    this.router.navigate(['/products']);
  }



}
