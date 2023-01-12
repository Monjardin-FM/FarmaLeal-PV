import React from "react";
import {
  AppDataGrid,
  AppDataGridColumn,
} from "../../../../../presentation/Components/AppDataGrid";

const items = [
  { id: 0, product: "Producto 1" },
  // { id: 1, product: "Producto 2" },
  // { id: 2, product: "Producto 3" },
  // { id: 3, product: "Producto 4" },
  // { id: 4, product: "Producto 5" },
  // { id: 5, product: "Producto 6" },
  // { id: 6, product: "Producto 7" },
  // { id: 7, product: "Producto 7" },
  // { id: 8, product: "Producto 7" },
  // { id: 9, product: "Producto 7" },
  // { id: 10, product: "Producto 7" },
  // { id: 11, product: "Producto 7" },
  // { id: 12, product: "Producto 7" },
  // { id: 13, product: "Producto 7" },
];

const NameProductColumn = () => {
  return <div className="flex items-center space-x-3">Producto</div>;
};

const DescripcionProductColumn = () => {
  return <div className="flex items-center space-x-3">Descripción</div>;
};

const Column1 = () => {
  return <div className="flex items-center space-x-3">Descripción</div>;
};

const Column2 = () => {
  return <div className="flex items-center space-x-3">Descripción</div>;
};

const actions = () => {
  return <div>Acciones</div>;
};

export const AppTableProducts = () => {
  const columns: AppDataGridColumn<any>[] = [
    {
      key: "ProductName",
      dataIndex: "ProductName",
      title: "Nombre del Producto",
      render: NameProductColumn,
    },
    {
      key: "descriptionProduct",
      dataIndex: "descriptionProduct",
      title: "Descripción del Producto",
      render: DescripcionProductColumn,
    },
    {
      key: "descriptionProduct",
      dataIndex: "descriptionProduct",
      title: "Descripción del Producto",
      render: Column1,
    },
    {
      key: "descriptionProduct",
      dataIndex: "descriptionProduct",
      title: "Descripción del Producto",
      render: Column2,
    },
    {
      key: "actionsProduct",
      dataIndex: "actionsProduct",
      title: "Acciones",
      render: actions,
    },
  ];

  return <AppDataGrid<any> columns={columns} itemKey="id" dataSource={items} />;
};
