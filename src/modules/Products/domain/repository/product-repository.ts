import { ProductPrueba } from "./../entities/productprueba";
export type ProductRepository = {
  searchByKeyword: (params: { keyword: string }) => Promise<ProductPrueba[]>;
};
