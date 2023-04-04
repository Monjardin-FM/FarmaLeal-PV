import React from "react";
import {
  AppDataGrid,
  AppDataGridColumn,
  RenderFnParams,
} from "../../../../../presentation/Components/AppDataGrid";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Chip } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { AppButton } from "../../../../../presentation/Components/AppButton";
import { useSellsProducts } from "../../hooks/useSellsProducts";
import { AppToast } from "../../../../../presentation/Components/AppToastNotification";
import { ProductPrueba } from "../../../../Products/domain/entities/productprueba";
// import { AppTooltip } from "../../../../../presentation/Components/AppTooltip";
export type ResultSearchTableModalProps = {
  items?: ProductPrueba[];
};

const DescriptionColumn = (params: RenderFnParams<ProductPrueba>) => {
  return (
    <div className="flex flex-col justify-center items-start ">
      <div>{params.record.name}</div>
      <div className="text-xs text-gray-300">{params.record.substance}</div>
    </div>
  );
};

const EANColumn = (params: RenderFnParams<ProductPrueba>) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="self-start">
        <Chip variant="filled" color="primary" label={params.record.ean} />
      </div>
    </div>
  );
};
const ExistenciaColumn = (params: RenderFnParams<ProductPrueba>) => {
  return (
    <div>
      <Chip
        variant="filled"
        color={params.record.cantidad === 0 ? "error" : "success"}
        label={params.record.cantidad}
      />
    </div>
  );
};

const ActionColumn = (params: RenderFnParams<ProductPrueba>) => {
  const { addItem: addItemSell } = useSellsProducts();
  const onAddItem = () => {
    addItemSell({
      item: {
        productId: params.record.idProducto,
        quantity: 1,
        ean: params.record.ean,
        name: params.record.name,
        substance: params.record.substance,
        existence: params.record.cantidad,
        // unitPrice: 10,
        unitPrice: Math.floor(Math.random() * 100) + 10,
      },
    });
    AppToast().fire({
      icon: "success",
      title: "Producto agregado",
    });
  };
  return (
    <div>
      <AppButton
        type="button"
        size="sm"
        variant="ghost"
        className="rounded-full"
        colorScheme="gray"
        onClick={onAddItem}
        isDisabled={params.record.cantidad === 0}
      >
        <FiPlus size={20} />
      </AppButton>
    </div>
  );
};
export const ResultSearchTableModal = ({
  items,
}: ResultSearchTableModalProps) => {
  const [parent] = useAutoAnimate({ duration: 300 });
  const columns: AppDataGridColumn<ProductPrueba>[] = [
    {
      key: "description",
      dataIndex: "description",
      title: "Producto",
      render: DescriptionColumn,
    },
    {
      key: "ean",
      dataIndex: "ean",
      title: "EAN",
      render: EANColumn,
    },
    {
      key: "existencia",
      dataIndex: "existencia",
      title: "Existencia",
      render: ExistenciaColumn,
    },
    {
      key: "action",
      dataIndex: "action",
      title: "Acciones",
      render: ActionColumn,
    },
  ];
  return (
    <div ref={parent} className="flex justify-center items-center w-full">
      <AppDataGrid columns={columns} itemKey="id" dataSource={items} />
    </div>
  );
};
