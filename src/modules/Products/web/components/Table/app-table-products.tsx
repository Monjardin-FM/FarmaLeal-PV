import React from "react";
import {
  AppDataGrid,
  AppDataGridColumn,
  RenderFnParams,
} from "../../../../../presentation/Components/AppDataGrid";
import { Products, items } from "../../../../../utils/exampleProducts";
import { FcApproval } from "react-icons/fc";
import { AppContainerBox } from "../../../../../presentation/Components/AppContainerBox";

export type TableProductsProps = {
  openModal: () => void;
};

const QuantityProductColumn = ({
  record,
  openModal,
}: RenderFnParams<Products> & TableProductsProps) => {
  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => {
          openModal();
        }}
        className="bg-white bg-opacity-20 rounded-full w-8 h-8"
      >
        {1}
      </button>
    </div>
  );
};

const DescripcionProductColumn = (params: RenderFnParams<Products>) => {
  return (
    <div className="flex items-center space-x-3">
      {params.record.descripcion}
    </div>
  );
};
const RecetaColumn = (params: RenderFnParams<Products>) => {
  return (
    <div>
      {params.record.receta && (
        <div>
          <FcApproval size={20} />
        </div>
      )}
    </div>
  );
};

const Existencia = (params: RenderFnParams<Products>) => {
  return <div>{params.record.existencia}</div>;
};

const PrecioUColumn = (params: RenderFnParams<Products>) => {
  return <div>{params.record.precioUnitario}</div>;
};

const ImporteColumn = (params: RenderFnParams<Products>) => {
  return <div>{params.record.precioUnitario}</div>;
};

export const AppTableProducts = ({ openModal }: TableProductsProps) => {
  const columns: AppDataGridColumn<Products>[] = [
    {
      key: "quantity",
      dataIndex: "QuantityColumn",
      title: "Cantidad",
      render: (data) =>
        QuantityProductColumn({
          ...data,
          openModal: () => {
            openModal();
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
      key: "receta",
      dataIndex: "receta",
      title: "Receta",
      render: RecetaColumn,
    },
    {
      key: "existencia",
      dataIndex: "existencia",
      title: "Existencia",
      render: Existencia,
    },
    {
      key: "precio",
      dataIndex: "precio",
      title: "PrecioUnitario",
      render: PrecioUColumn,
    },
    {
      key: "importe",
      dataIndex: "importe",
      title: "Importe",
      render: ImporteColumn,
    },
  ];

  return (
    <>
      <div className=" mt-4 flex justify-center items-start col-start-2 col-span-10 row-span-4 overflow-y-auto overflow-x-auto">
        <AppContainerBox className="">
          <AppDataGrid columns={columns} itemKey="id" dataSource={items} />
        </AppContainerBox>
      </div>
      ;
    </>
  );
};
