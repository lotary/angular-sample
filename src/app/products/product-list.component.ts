import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
   
    pageTitle: string = 'Product List!!';
    imageWidth: number = 50;
    imageMargin: number=2;
    imageDisplay: boolean = false;
    _listFilter: string;
    

    constructor(private productService: ProductService){
    }

    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter=value;
        this.filteredProducts = this._listFilter? this.performFilter(this._listFilter): this.products;

    }

    performFilter(filterBy: string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1
        );
    }

    onRatingClicked(message:string){
        this.pageTitle = 'Product List: ' + message;
    }

    filteredProducts: IProduct[];
    products: IProduct[];
    errorMessage: string;

    toggleImage(): void{
        this.imageDisplay = !this.imageDisplay;
    }

    ngOnInit():void{
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage =<any>error
        );

        console.log('In OnInit');
    }

    ngOnDestroy():void{
        console.log('In OnDestroy');
    }
}