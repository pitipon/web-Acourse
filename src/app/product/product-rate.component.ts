import { Component, OnInit, OnChanges, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.css']
})
export class ProductRateComponent implements OnInit, OnChanges {
  @Input() view:number; //ch_view
  @Output() itemClick: EventEmitter<string> = new EventEmitter<string>();
  rateText:string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges():void {
    if (this.view > 3000) {
      this.rateText = "Popular Views";
    } else {
      this.rateText = this.view + ' Views';
    }
  }

  onClick():void{
    //send event from child(product-rate) to parent(product-detail) component
    // we use eventEmitter
    this.itemClick.emit('view' + this.view);
  }

}
