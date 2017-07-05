import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ProductService } from "../shared/product.service";
import { Product } from "../shared/product";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  product:Array<Product>;
  constructor(private varProductService:ProductService, private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.varProductService.getProduct().subscribe(sub => this.product = sub);
  }

  onShowDetail(event:Event, product:Product):void {
    this.router.navigate(['/product', product.id,'product_name', product.c_title]);
    event.preventDefault();
  }

}
