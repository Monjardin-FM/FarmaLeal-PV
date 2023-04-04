import { useState } from "react";
import { AppContainerBox } from "../../presentation/Components/AppContainerBox";
import { AppFormField } from "../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../presentation/Components/AppForm/AppFormLabel";
import DatePicker from "react-datepicker";
// export type SellsHeadPageProps = {
//   // onSearch: (search: string) => void;
//   // search: string;
//   // setSearch: (search: string) => void;
// };

export const RegisterCutHeadPage = () => {
  const [fechaInicio, setFechaInicio] = useState<Date>(new Date());

  return (
    <div className="flex justify-center items-center col-start-2 col-span-10 row-span-1">
      <div className="w-full grid grid-cols-12 h-full gap-2 items-center ">
        <div className="col-span-8 col-start-3 flex flex-col">
          <AppContainerBox className="p-2">
            <div className="flex flex-col gap-2 w-1/3">
              <AppFormField>
                <AppFormLabel>Desde: </AppFormLabel>
                <DatePicker
                  selected={fechaInicio}
                  onChange={(date) => {
                    if (date instanceof Date) {
                      setFechaInicio(date);
                    }
                  }}
                />
              </AppFormField>
            </div>
          </AppContainerBox>
        </div>
      </div>
    </div>
  );
};
