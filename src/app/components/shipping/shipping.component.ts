import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {
  shippingCosts: any;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
