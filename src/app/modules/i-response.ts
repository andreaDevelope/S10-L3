import { iProducts } from './iproducts';

export interface iResponse {
  products: iProducts[];
  total: number;
  skip: number;
  limit: number;
}
