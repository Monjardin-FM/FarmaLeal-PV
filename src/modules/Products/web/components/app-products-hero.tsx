import React from "react";
import { AppHero } from "../../../../presentation/Components/AppHero/AppHero";
import { AppHeroContent } from "../../../../presentation/Components/AppHero/AppHeroContent";
import { IoIosAddCircle } from "react-icons/io";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import AppTextField from "../../../../presentation/Components/AppTextField";
import { TfiSearch } from "react-icons/tfi";
export type AppProductsHeroProps = {
  setToggleAddProductModal: () => void;
};

export const AppProductsHero = ({
  setToggleAddProductModal,
}: AppProductsHeroProps) => {
  return (
    <>
      <AppHero size="lg" className="mt-1 ">
        <AppHeroContent>
          <AppContainerBox className="p-2">
            <div className="w-full  px-20 flex flex-col items-center">
              <div className="mb-5">
                <p className="text-lg font-semibold text-white center">
                  Administrador de Artículos
                </p>
              </div>
              <div className="flex flex-row max-w-3xl w-full justify-center items-center">
                <div className="mr-1 w-full">
                  <AppTextField placeholder="Buscar Artículo" type="text" />
                </div>
                <AppButton
                  variant="outline"
                  className="border-opacity-40"
                  colorScheme="primary"
                >
                  <TfiSearch size={20} />
                </AppButton>
              </div>
              <div className="flex flex-row max-w-3xl w-full justify-start items-center text-white h-16 mt-6 ">
                <div className="flex flex-col justify-center items-center ">
                  <div>
                    <AppButton
                      variant="ghost"
                      colorScheme="info"
                      onClick={() => {
                        setToggleAddProductModal();
                      }}
                    >
                      <div className="bg-transparent rounded-full  hover:rounded-full  transition duration-500">
                        <IoIosAddCircle size="2.3em" color="green" />
                      </div>
                    </AppButton>
                  </div>
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
