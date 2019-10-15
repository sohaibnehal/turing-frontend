import { ShippingRegion } from './ShippingRegion';

export interface ShippingOptions {
  [key: string]: {
    _id: string;
    type: string;
    cost: number;
    shippingRegionId: ShippingRegion;
    created_at: string;
    updated_at: string;
  }[];
}
