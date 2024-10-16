import { Directive, ElementRef } from '@angular/core';
import { PrdServiceService } from '../services/prd-service.service';
import { iProducts } from '../modules/iproducts';

@Directive({
  selector: '[appCarouselDir]',
})
export class CarouselDirDirective {
  constructor(private prdServ: PrdServiceService, private ref: ElementRef) {}

  products: iProducts[] = [];
  images: string[] = [];

  ngOnInit() {
    this.prdServ.getAll().subscribe((pr) => (this.products = pr));
    this.images = this.products.map((pr) => pr.thumbnail);
    this.products.forEach((prd) => {
      console.log(prd.title);
    });
  }
}
