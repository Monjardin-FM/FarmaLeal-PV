import React from "react";
import { AppFormField } from "../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../presentation/Components/AppTextField";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { TfiSearch } from "react-icons/tfi";
import BarCode from "../../../../assets/img/bar-code.png";
export type SellsSearchProductProps = {
  onSearch: (search: string) => void;
  search: string;
  setSearch: (search: string) => void;
};
export const SellsSearchProduct = ({
  onSearch,
  search,
  setSearch,
}: SellsSearchProductProps) => {
  const handleKey = (e: any) => {
    if (e.keyCode === 13) {
      onSearch(search);
    }
  };
  return (
    <div>
      <AppFormField>
        <div className="flex flex-row items-center justify-center gap-3">
          <AppFormLabel>
            <div className="w-7">
              <img src={BarCode} alt="barras" />
            </div>
          </AppFormLabel>
          <AppTextField
            placeholder="Nombre del Producto o código"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            onKeyDown={handleKey}
          />
          <AppButton
            variant="outline"
            className="border-opacity-40"
            colorScheme="primary"
            size="sm"
            type="submit"
            onClick={() => onSearch(search)}
          >
            <TfiSearch size={20} />
          </AppButton>
        </div>
      </AppFormField>
    </div>
  );
};
