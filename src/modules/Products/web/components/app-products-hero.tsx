import React from "react";
import { AppHero } from "../../../../presentation/Components/AppHero/AppHero";
import { AppHeroContent } from "../../../../presentation/Components/AppHero/AppHeroContent";
import { IoIosAddCircle } from "react-icons/io";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
// import AppTextField from "../../../../presentation/Components/AppTextField";
// import { TfiSearch } from "react-icons/tfi";
import { SellsSearchProduct } from "../../../Sells/web/components/sells-search-input";
export type AppProductsHeroProps = {
  setToggleAddProductModal: () => void;
  onSearch: (search: string) => void;
  search: string;
  setSearch: (search: string) => void;
};

export const AppProductsHero = ({
  setToggleAddProductModal,
  onSearch,
  search,
  setSearch,
}: AppProductsHeroProps) => {
  return (
    <>
      <AppHero size="lg" className="mt-1">
        <AppHeroContent>
          <AppContainerBox className="p-3">
            <div className="w-full  px-20 flex flex-col items-center gap-y-2">
              <p className="text-lg font-semibold text-white center">
                Administrador de Artículos
              </p>
              <div className="w-full grid grid-cols-12 gap-2 ">
                <div className="col-span-10 col-start-2">
                  <SellsSearchProduct
                    onSearch={onSearch}
                    search={search}
                    setSearch={setSearch}
                  />
                </div>
              </div>
              <div className="flex flex-row max-w-3xl w-full justify-start items-center text-white h-16  ">
                <div className="flex flex-col justify-center items-center ">
                  <AppButton
                    variant="ghost"
                    colorScheme="info"
                    onClick={() => {
                      setToggleAddProductModal();
                    }}
                  >
                    <IoIosAddCircle size="2.3em" color="green" />
                  </AppButton>
                  <div className="">Agregar Artículo</div>
                </div>
              </div>
            </div>
          </AppContainerBox>
        </AppHeroContent>
      </AppHero>
    </>
  );
};
