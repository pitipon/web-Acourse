import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Title } from "@angular/platform-browser";
import { ProductService } from "../shared/product.service";
import { Product } from "../shared/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //product:Product[];
  product:Array<Product>;
  keywordFilter:string;
  constructor(private varTitle:Title, private varProductService: ProductService, private router: Router) { }

  ngOnInit() {
      //setTitle
      this.varTitle.setTitle('Product');  
      //call product service
      this.getProductDetail();
  }

  getProductDetail() {
    this.varProductService.getProduct().subscribe(product => this.product = product);
  }

  onShowDetail(product:Product) {
    this.router.navigate(['/product', product.id,'product_name', product.c_title]);
  }

}
