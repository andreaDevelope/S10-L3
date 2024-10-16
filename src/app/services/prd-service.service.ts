import { iResponse } from './../modules/i-response'; // Assicurati che l'interfaccia sia correttamente importata
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { iProducts } from '../modules/iproducts';

@Injectable({
  providedIn: 'root',
})
export class PrdServiceService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  favouritesArray: iProducts[] = [];

  favourites$ = new Subject<iProducts>();

  cart$ = new Subject<iProducts>();
  cart: iProducts[] = [];

  favoritesObj$ = this.favourites$.asObservable().pipe(
    map((prd) => {
      this.favouritesArray.push(prd);
    })
  );

  getAll = () => {
    return this.http
      .get<iResponse>(this.apiUrl)
      .pipe(map((res) => res.products));
  };

  addToCart = (product: iProducts) => {
    this.cart$.next(product);
  };

  addToFavourites = (product: iProducts) => {
    this.favourites$.next(product);
  };
}
