import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../shared/product";

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], keywordFilter: string): Product[] {
    keywordFilter = keywordFilter ? keywordFilter.toLocaleLowerCase() : null; //if have keyword, then change to lowerCapital | else dont have keyword, then null.
      return keywordFilter ? value.filter((product: Product) =>  
      product.c_title.toLocaleLowerCase().indexOf(keywordFilter) !== -1) : value;
      // if have keyword, then 
  }

}
