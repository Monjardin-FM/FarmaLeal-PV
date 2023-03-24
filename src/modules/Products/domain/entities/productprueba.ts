export type ProductPrueba = {
  id: number;
  name: string;
  ean: string;
  claveSAT: string;
  substance: string;
  iva?: number;
  ieps?: number;
  tags: ProductTag[];
  cantidad: number;
};

export type ProductTag =
  | "is_controlled"
  | "is_chronic"
  | "requires_prescription"
  | "is_refrigerated"
  | null;
