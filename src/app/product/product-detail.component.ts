import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";

import { ProductDetail } from "../shared/product-detail"; //import class for productDetail class array
import { ProductService } from "../shared/product.service"; //import service for productService , productDetail

import { Subscription } from "rxjs/Subscription"; //import for unscribscribe obj

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id:number;
  //productDetail:ProductDetail[];
  productDetail:Array<ProductDetail>;
  errorMessage:string;
  sub:Subscription;
  subProductService:Subscription;
  productName:string;
  constructor(private route: ActivatedRoute, private productService:ProductService, private location:Location) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe( params => {
       this.id = params['id'];
       this.productName = params['product_name'];
       this.getProductDetail();
     });
  }


  getProductDetail() {
    this.subProductService = this.productService.getProductDetail(this.id)
      .subscribe(subscribeProductDetail => this.productDetail = subscribeProductDetail,
      subscribeError => this.errorMessage = <any>subscribeError);
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
    this.subProductService.unsubscribe();
    console.log('destroy');
  }

  goBack(){
    this.location.back();
  }

  onClickView(itemFromChild){
    alert(itemFromChild);
  }
}
