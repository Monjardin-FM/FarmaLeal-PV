import React, { useEffect, useState } from "react";
import { AppFormField } from "../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../presentation/Components/AppForm/AppFormLabel";
import { AppButton } from "../../../../presentation/Components/AppButton";
import AppSelect from "../../../../presentation/Components/AppSelect";
import { useGetCustomers } from "../hooks/use-get-customers";
import { useGetMandates } from "../hooks/use-get-mandates";
import { Customer } from "../../domain/entities/customer";
import { Mandate } from "../../domain/entities/mandate";

type ClientMandateFormProps = {
  setOnSave: (arg: boolean) => void;
};

export const ClientMandateForm = ({ setOnSave }: ClientMandateFormProps) => {
  const { customers, getCustomer } = useGetCustomers();
  const { mandates, getMandates } = useGetMandates();
  const [idConvenio, setIdConvenio] = useState<number>(0);
  const [idMandato, setIdMandato] = useState<number>(0);
  const [convenio, setConvenio] = useState<Customer>({
    idConvenio: 0,
    descripcion: "",
  });
  const [mandato, setMandato] = useState<Mandate>({
    idMandato: 0,
    descripcion: "",
  });

  const getCustomersFunction = () => {
    getCustomer();
  };
  const handleSave = async () => {
    await localStorage.setItem("convenio", JSON.stringify(convenio));
    await localStorage.setItem("mandato", JSON.stringify(mandato));
  };

  const handleChangeCustomer = (e: any) => {
    const parseCustomer = JSON.parse(e.target.value);
    setIdConvenio(parseInt(parseCustomer.idConvenio));
    setConvenio(parseCustomer);
  };
  const handleChangeMandate = (e: any) => {
    const parseMandate = JSON.parse(e.target.value);
    setIdMandato(parseInt(parseMandate.idMandato));
    setMandato(parseMandate);
  };
  useEffect(() => {
    if (idConvenio > 0) getMandates({ idConvenio: idConvenio });
    if (mandates?.length === 0) setIdMandato(0);
    setIdMandato(0);
  }, [idConvenio]);

  useEffect(() => {
    getCustomersFunction();
  }, []);

  return (
    <div className="flex flex-col gap-y-5 items-center justify-center w-72">
      <div className="w-full">
        <AppFormField>
          <AppFormLabel>Cliente:</AppFormLabel>
          <AppSelect
            name="customer"
            onChange={(e) => handleChangeCustomer(e)}
            value={JSON.stringify(convenio)}
          >
            <option value={0}>Selecciona un cliente</option>
            {customers?.map((customer) => (
              <option
                key={customer.idConvenio}
                value={JSON.stringify(customer)}
              >
                {customer.descripcion}
              </option>
            ))}
          </AppSelect>
        </AppFormField>
      </div>
      <div className="w-full">
        <AppFormField>
          <AppFormLabel>Sucursal:</AppFormLabel>
          <AppSelect
            name="mandato"
            onChange={(e) => {
              handleChangeMandate(e);
            }}
            value={JSON.stringify(mandato)}
          >
            <option value={0}>Selecciona un mandato</option>
            {mandates?.map((mandate) => (
              <option key={mandate.idMandato} value={JSON.stringify(mandate)}>
                {mandate.descripcion}
              </option>
            ))}
          </AppSelect>
        </AppFormField>
      </div>
      <div>
        <AppButton
          colorScheme="primary"
          variant="outline"
          // type="submit"
          size="sm"
          // isLoading={loading === "pending"}
          onClick={() => {
            handleSave();
            setOnSave(true);
          }}
        >
          Guardar
        </AppButton>
      </div>
    </div>
  );
};
