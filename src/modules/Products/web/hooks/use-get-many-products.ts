import { SearchByKeyword } from "./../../infraestructure/services/search-by-keyword";
import { ProductRepository } from "./../../domain/repository/product-repository";
import { useAsyncFn } from "react-use";
export const useSearchProducts = () => {
  const [{ value: products, loading, error }, getProducts] = useAsyncFn<
    ProductRepository["searchByKeyword"]
  >(SearchByKeyword, [SearchByKeyword]);

  return {
    products,
    loading,
    error,
    getProducts,
  };
};
