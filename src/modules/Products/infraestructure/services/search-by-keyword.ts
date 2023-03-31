import { ProductPrueba } from "./../../domain/entities/productprueba";
import { verifyResponse } from "./../../../../utils/check-response";
import { token } from "../../../../utils/token";
import { api } from "./../../../../utils/api";
import { ProductRepository } from "./../../domain/repository/product-repository";

export const SearchByKeyword: ProductRepository["searchByKeyword"] = async ({
  keyword: params,
}) => {
  const response = await api().get("Catalog/GetCatalogoProducto", {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
    searchParams: {
      descripcion: params,
    },
  });

  const { body } = await verifyResponse({ response });
  const data = body.data as any[];

  const products = data.map<ProductPrueba>((product) => ({
    idProducto: product.idProducto,
    ean: product.ean,
    claveSAT: product.claveSAT,
    name: product.descripcion,
    substance: product.sustanciaActiva,
    iva: product.iva,
    ieps: product.ieps,
    tags: product.tags,
    cantidad: product.cantidad,
  }));
  return products;
};
