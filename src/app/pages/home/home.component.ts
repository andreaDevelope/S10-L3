import { Component } from '@angular/core';
import { PrdServiceService } from '../../services/prd-service.service';
import { iProduct } from '../../modules/i-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private prdServ: PrdServiceService) {}
  products: iProduct[] = [];
  productsImg: string[] = [];
  ngOnInit() {
    this.prdServ.getAll().subscribe((res) => {
      console.log(res);
      this.products = res.products;
      res.products.forEach((pr) => {
        this.productsImg = [...this.productsImg, ...pr.images];
      });
    });
  }
}
export class NgbdCarouselBasic {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
