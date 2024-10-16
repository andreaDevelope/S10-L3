import { Component } from '@angular/core';
import { PrdServiceService } from '../../services/prd-service.service';
import { iProducts } from '../../modules/iproducts';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  cart: iProducts[] = [];
  constructor(private prdServ: PrdServiceService) {}

  ngOnInit() {
    this.cart = this.prdServ.cart;
  }
}
