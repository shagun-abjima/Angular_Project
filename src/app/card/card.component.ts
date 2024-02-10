import { Component, OnInit } from '@angular/core';
import { dataService } from '../service/data.service';
import { Product } from '../model/Product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  productList:
  Product[]=[];
constructor(private dataservice:dataService){}
ngOnInit(): void {
  this.fetchdata();
}
fetchdata(){
  this.dataservice.fetchProducts().subscribe((prod)=>{
    this.productList = prod;
  });
}
}
