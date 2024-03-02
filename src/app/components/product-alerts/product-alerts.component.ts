import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import { Product } from '../../service/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product; 
  @Output() notify = new EventEmitter();
  
  constructor() {  this.product = {} as Product;}

  ngOnInit() {
  }

  alert(product: Product){
    
  }

}
