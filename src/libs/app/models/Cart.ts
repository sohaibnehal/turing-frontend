import { Product } from './Product';

export interface Cart {
  product: Product;
  quantity: number;
  attributes: { Size: string; Color: string };
}
