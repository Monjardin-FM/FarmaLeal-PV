import React from "react";
import {
  AppDataGrid,
  AppDataGridColumn,
  RenderFnParams,
} from "../../../../../presentation/Components/AppDataGrid";
import { AppContainerBox } from "../../../../../presentation/Components/AppContainerBox";
import { ProductCartItem } from "../../../../Sells/domain/entities/product-cart-item";
import { useSellsProducts } from "../../../../Sells/web/hooks/useSellsProducts";

import { AppRemoveItemButton } from "./app-remove-item-button";
import { AppButton } from "../../../../../presentation/Components/AppButton";
import { Chip } from "@mui/material";
import { BsEye } from "react-icons/bs";

export type TableProductsProps = {
  openModal: (nameModal: string) => void;
  setQuantityProduct: (quantity: number) => void;
  setIndexProduct: (indexProduct: number) => void;
};

const QuantityProductColumn = (
  params: RenderFnParams<ProductCartItem> & TableProductsProps
) => {
  return (
    <div className="flex flex-row items-center justify-start space-x-3">
      <AppButton
        onClick={() => {
          params.setIndexProduct(params.index);
          params.setQuantityProduct(params.record.quantity);
          params.openModal("quantity");
        }}
        className="rounded-full"
        size="sm"
        variant="ghost"
      >
        {params.record.quantity}
      </AppButton>
    </div>
  );
};

const DescripcionProductColumn = (params: RenderFnParams<ProductCartItem>) => {
  return (
    <div className="flex items-start flex-col">
      <div className="text-base">{params.record.substance}</div>
      <div className="text-gray-500 text-xs">{params.record.name}</div>
    </div>
  );
};
const EANProductColumn = (params: RenderFnParams<ProductCartItem>) => {
  return (
    <div className="flex justify-start flex-row">
      <Chip color="info" className="text-sm" label={params.record.ean} />
    </div>
  );
};

const ExistenceColumn = (params: RenderFnParams<ProductCartItem>) => {
  return (
    <div className="flex flex-row justify-start">{params.record.existence}</div>
  );
};

const UnitPriceColumn = (params: RenderFnParams<ProductCartItem>) => {
  return (
    <div className="flex justify-center flex-col">
      {`$${params.record.unitPrice}`}
    </div>
  );
};

const ActionColumn = (params: RenderFnParams<ProductCartItem>) => {
  return (
    <div className="flex flex-row gap-x-2 justify-start items-center">
      <AppButton colorScheme="gray" variant="ghost" size="sm">
        <BsEye size={20} />
      </AppButton>
      <AppRemoveItemButton idItem={params.index} />
    </div>
  );
};
const TotalPriceColumn = (params: RenderFnParams<ProductCartItem>) => {
  return (
    <div className="flex flex-row justify-start">
      {/* {`$${params.record.unitPrice * params.record.quantity}`} */}
      <Chip
        color="warning"
        className="text-sm"
        label={`$${params.record.unitPrice * params.record.quantity}`}
      />
    </div>
  );
};

export const AppTableProducts = ({
  openModal,
  setQuantityProduct,
  setIndexProduct,
}: TableProductsProps) => {
  const columns: AppDataGridColumn<ProductCartItem>[] = [
    {
      key: "quantity",
      dataIndex: "QuantityColumn",
      title: "Cantidad",
      render: (data) =>
        QuantityProductColumn({
          ...data,
          setQuantityProduct: () => {
            setQuantityProduct(data.record.quantity);
          },
          setIndexProduct: () => {
            setIndexProduct(data.index);
          },
          openModal: () => {
            openModal("quantity");
          },
        }),
    },
    {
      key: "description",
      dataIndex: "description",
      title: "Descripcion",
      render: DescripcionProductColumn,
    },
    {
      key: "EAN",
      dataIndex: "EAN",
      title: "EAN",
      render: EANProductColumn,
    },
    {
      key: "Existence",
      dataIndex: "Existence",
      title: "Existencia",
      render: ExistenceColumn,
    },
    {
      key: "UnitPrice",
      dataIndex: "UnitPrice",
      title: "Precio Unitario",
      render: UnitPriceColumn,
    },
    {
      key: "Amount",
      dataIndex: "Amount",
      title: "Importe",
      render: TotalPriceColumn,
    },
    {
      key: "actions",
      dataIndex: "actions",
      title: "Acciones",
      render: ActionColumn,
    },
  ];

  const { cart } = useSellsProducts();
  return (
    <>
      <div className=" mt-4 flex justify-center items-start col-start-2 col-span-10 row-span-4 overflow-y-auto overflow-x-auto">
        <AppContainerBox className="">
          <AppDataGrid columns={columns} itemKey="id" dataSource={cart} />
        </AppContainerBox>
      </div>
      ;
    </>
  );
};
