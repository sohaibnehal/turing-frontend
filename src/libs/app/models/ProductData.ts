import { Product } from './Product';
export interface ProductData {
  products: Product[];
  productsPagination: {
    currentPage: number;
    nextPage: number;
    total: number;
  };
}
