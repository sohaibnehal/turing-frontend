export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discounted_price: number;
  image: string; // for dashboard
  image_2: string; // for product detail popup
  thumbnail: string;
  display: string;
  categoryId: number;
  attributeValueId: number;
  attributes?: [];
}
