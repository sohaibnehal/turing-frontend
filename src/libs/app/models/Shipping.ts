import { ShippingRegion } from './ShippingRegion';

export interface Shipping {
  _id: string;
  type: string;
  cost: number;
  shippingRegionId: ShippingRegion;
}
