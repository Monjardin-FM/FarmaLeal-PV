import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppPageTransition } from "../../../../presentation/Components/AppPageTransition";
import farmalealLogo from "../../../../assets/img/farmaleal-logo.png";
import { ClientMandateForm } from "./client-mandate-form";
import { Customer } from "../../domain/entities/customer";
import { useGetConvenioLocalStorage } from "../hooks/useGetConvenioLocalStorage";
import { useGetMandatoLocalStorage } from "../hooks/useGetMandatoLocalStorage";
import { Mandate } from "../../domain/entities/mandate";

export const SelectClientMandateForm = () => {
  // const { user } = useUser();
  // const { convenio } = useConvenio();
  // const { mandato } = useMandato();
  const [onSave, setOnSave] = useState(false);
  const [customer, setCustomer] = useState<Customer>();
  const [mandate, setMandate] = useState<Mandate>();
  const { convenio } = useGetConvenioLocalStorage();
  const { mandato } = useGetMandatoLocalStorage();
  const [customerok, setCustomerOk] = useState(false);
  const [mandateok, setMandateOk] = useState(false);

  useEffect(() => {
    if (onSave) {
      if (convenio.idConvenio !== 0) {
        setCustomer(convenio);
        setCustomerOk(true);
      } else setCustomer({ idConvenio: 0, descripcion: "" });
      if (mandato.idMandato !== 0) {
        setMandate(mandato);
        setMandateOk(true);
      } else setMandate({ idMandato: 0, descripcion: "" });
    }
  }, [onSave, convenio, mandato, customer, mandate]);

  return (
    <>
      {customerok && mandateok ? (
        <Navigate to={"/"} />
      ) : (
        <AppPageTransition>
          <div className="flex w-screen min-h-screen justify-center content-center items-center bg-animated">
            <div className="flex flex-col gap-y-5 justify-center items-center absolute z-10 content-center px-48 py-24 bg-black bg-opacity-10 border border-gray-50 border-opacity-10 rounded-md  backdrop-filter backdrop-blur-md text-sm text-gray-100 shadow-md shadow-black">
              <div className="w-20">
                <img src={farmalealLogo} alt="" className="w-full h-auto" />
              </div>
              <div className="font-semibold text-lg text-opacity-90 text-primary-500">
                FARMALEAL PV
              </div>
              <div className="text-base font-semibold">
                Seleccionar Cliente y Mandato
              </div>
              <div>
                <ClientMandateForm setOnSave={setOnSave} />
              </div>
            </div>
          </div>
        </AppPageTransition>
      )}
    </>
  );
};
