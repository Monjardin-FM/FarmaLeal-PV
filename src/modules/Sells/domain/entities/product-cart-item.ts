export type ProductCartItem = {
  productId: number;
  quantity: number;
  unitPrice?: number;
  amount?: number;
  ean: string;
  substance: string;
  name: string;
};
