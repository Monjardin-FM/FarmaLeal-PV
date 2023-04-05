import { useState } from "react";
import { AppContainerBox } from "../../presentation/Components/AppContainerBox";
import { AppFormField } from "../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../presentation/Components/AppForm/AppFormLabel";
import { AppDatePicker } from "../../presentation/Components/AppDatePicker";
import { AppHeading } from "../../presentation/Components/AppHeading";
import { AppButton } from "../../presentation/Components/AppButton";
import { BiSearch } from "react-icons/bi";
import Register from "../../assets/img/cash-register.png";
export type SellsHeadPageProps = {
  // onSearch: (search: string) => void;
  // search: string;
  // setSearch: (search: string) => void;
  setShowRegisterCutModal: () => void;
};

export const RegisterCutHeadPage = ({
  setShowRegisterCutModal,
}: SellsHeadPageProps) => {
  const [fechaInicio, setFechaInicio] = useState<Date>(new Date());
  const [fechaFinal, setFechaFinal] = useState<Date>(new Date());

  return (
    <div className="flex justify-center items-center col-start-1 col-span-12 row-span-1">
      <div className="w-full grid grid-cols-12 h-full gap-2 items-center ">
        <div className="col-span-10 col-start-2 flex flex-row ">
          <AppContainerBox>
            <div className="flex flex-col items-center justify-center mt-3">
              <AppHeading size="xl">Corte de Caja</AppHeading>
            </div>
            <div className="relative flex flex-row p-5 items-center justify-center bg-black w-9/12 self-center bg-opacity-25 rounded-lg mb-5 border border-gray-300 border-opacity-10 gap-2">
              <div className="flex flex-col gap-2 w-1/3">
                <AppFormField>
                  <AppFormLabel>Desde: </AppFormLabel>
                  <AppDatePicker
                    value={fechaInicio}
                    onChange={(date: Date) => {
                      if (date instanceof Date) {
                        setFechaInicio(date);
                      }
                    }}
                  />
                </AppFormField>
              </div>

              <div className="flex flex-col gap-2 w-1/3">
                <AppFormField>
                  <AppFormLabel>Hasta:</AppFormLabel>
                  <AppDatePicker
                    value={fechaFinal}
                    onChange={(date) => {
                      if (date instanceof Date) {
                        setFechaFinal(date);
                      }
                    }}
                  />
                </AppFormField>
              </div>
              <div className="absolute bottom-5 right-0 mr-5 ">
                <AppButton variant="outline" colorScheme="primary">
                  <BiSearch size={30} />
                </AppButton>
              </div>
            </div>
            <div className="flex flex-col items-center mb-3">
              <div
                onClick={setShowRegisterCutModal}
                className="w-16 bg-white p-3 bg-opacity-20 border border-white border-opacity-20 rounded-lg hover:bg-opacity-40 transition duration-300 hover:cursor-pointer"
              >
                <img src={Register} alt="register" />
              </div>
            </div>
          </AppContainerBox>
        </div>
      </div>
    </div>
  );
};
