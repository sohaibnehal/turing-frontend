import { CategoriesEffects } from './categories.effects';
import { ProductsEffects } from './products.effects';
import { CartEffects } from './cart.effects';
import { ShippingEffects } from './shipping.effects';
import { TaxesEffects } from './tax.effects';
import { AuthEffects } from './auth.effects';

export const effects: any[] = [
  CategoriesEffects,
  ProductsEffects,
  CartEffects,
  ShippingEffects,
  TaxesEffects,
  AuthEffects
];

export * from './categories.effects';
export * from './products.effects';
export * from './cart.effects';
export * from './shipping.effects';
export * from './tax.effects';
export * from './auth.effects';
