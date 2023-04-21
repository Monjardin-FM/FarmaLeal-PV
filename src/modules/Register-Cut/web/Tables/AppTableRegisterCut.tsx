import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import {
  AppDataGrid,
  AppDataGridColumn,
  RenderFnParams,
} from "../../../../presentation/Components/AppDataGrid";
import { RegisterCut } from "../../domain/entities/registerCut";

const DateColumn = (params: RenderFnParams<RegisterCut>) => {
  return (
    <div className="flex items-start flex-col">
      <div>{params.record.date}</div>
    </div>
  );
};
const CountedColumn = (params: RenderFnParams<RegisterCut>) => {
  return (
    <div className="flex items-start flex-col">
      <div>{params.record.counted}</div>
    </div>
  );
};

const CalculatedColumn = (params: RenderFnParams<RegisterCut>) => {
  return (
    <div className="flex items-start flex-col">
      <div>{params.record.calculated}</div>
    </div>
  );
};

const DifferenceColumn = (params: RenderFnParams<RegisterCut>) => {
  return (
    <div className="flex items-start flex-col">
      <div>{params.record.difference}</div>
    </div>
  );
};
const UserColumn = (params: RenderFnParams<RegisterCut>) => {
  return (
    <div className="flex items-start flex-col">
      <div>{params.record.difference}</div>
    </div>
  );
};

export const AppTableRegisterCut = () => {
  const columns: AppDataGridColumn<RegisterCut>[] = [
    {
      key: "dateRegisterCut",
      dataIndex: "dateRegisterCut",
      title: "Fecha",
      render: DateColumn,
    },
    {
      key: "countedRegisterCut",
      dataIndex: "countedRegisterCut",
      title: "Contado",
      render: CountedColumn,
    },
    {
      key: "calculatedRegisterCut",
      dataIndex: "calculatedRegisterCut",
      title: "Calculado",
      render: CalculatedColumn,
    },
    {
      key: "differenceRegisterCut",
      dataIndex: "differenceRegisterCut",
      title: "Diferencia",
      render: DifferenceColumn,
    },
    {
      key: "userRegisterCut",
      dataIndex: "userRegisterCut",
      title: "Usuario",
      render: UserColumn,
    },
  ];
  return (
    <div className="  flex justify-center items-start col-start-2 col-span-10 row-span-4 row-start-3 overflow-y-auto overflow-x-auto">
      <AppContainerBox>
        <AppDataGrid columns={columns} itemKey="id" />
      </AppContainerBox>
    </div>
  );
};
