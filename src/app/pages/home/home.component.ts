import { Component } from '@angular/core';
import { PrdServiceService } from '../../services/prd-service.service';
import { iProducts } from '../../modules/iproducts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private prdServ: PrdServiceService) {}
  products: iProducts[] = [];
  private subscriptions: Subscription = new Subscription();
  ngOnInit() {
    const prdSub = this.prdServ
      .getAll()
      .subscribe((pr) => (this.products = pr));
    // aggiungo la sub a sucriptions
    this.subscriptions.add(prdSub);

    // subscribe a this.prdServ.favourites$
    const favSub = this.prdServ.favourites$.subscribe((product) => {
      this.prdServ.favouritesArray.push(product);
      // aggiungo la sub a sucriptions
      this.subscriptions.add(favSub);
    });
    // subscribe a this.prdServ.cart$
    const cartSub = this.prdServ.cart$.subscribe((prd) => {
      this.prdServ.cart.push(prd);
      // aggiungo la sub a sucriptions
      this.subscriptions.add(cartSub);
    });
  }

  addFauvorites = (product: iProducts) => {
    this.prdServ.addToFavourites(product);
    console.log('prodotto aggiunto ai preferiti', this.prdServ.favouritesArray);
  };

  addToCart = (param: iProducts) => {
    this.prdServ.addToCart(param);
    console.log('prodotto aggiunto al carrello', this.prdServ.cart);
  };

  ngOnDestroy() {
    // distruggo le sub
    this.subscriptions.unsubscribe();
  }
}

export class NgbdCarouselBasic {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
