import React, { useState } from "react";
import { useFormik } from "formik";
import {
  AppModal,
  AppModalBody,
  AppModalCloseButton,
  AppModalContent,
  AppModalFooter,
  AppModalHeader,
  AppModalOverlay,
} from "../../../../presentation/Components/AppModal";
import {
  AppTab,
  AppTabList,
  AppTabPanel,
  AppTabPanels,
  AppTabs,
} from "../../../../presentation/Components/AppTabs";
import { ProductDetailForm } from "./Forms/ProductDetailForm";
import { ProductAditionalForm } from "./Forms/ProductAditionalForm";
import { ProductImageForm } from "./Forms/ProductImageForm";
import { ProductTagsForm } from "./Forms/ProductTagsForm";
import { ProductProviderForm } from "./Forms/ProductProviderForm";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { BiSave } from "react-icons/bi";
import { Product } from "../../domain/entities/product";
import * as Yup from "yup";
import { AppToast } from "../../../../presentation/Components/AppToastNotification";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type AppAddProductModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const AppAddProductModal = ({
  isVisible,
  onClose,
}: AppAddProductModalProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<File>();
  const [parent] = useAutoAnimate({ duration: 300 });

  const addTags = (tag: string) => {
    setTags((prevTags) => [...prevTags, tag]);
  };
  const deleteTag = (idTag: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(idTag, 1);
    setTags(updatedTags);
  };

  const onChange = async (fileUpload: File | null) => {
    if (fileUpload) {
      setFile(fileUpload);
    } else {
      setFile(undefined);
    }
  };

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    setFieldValue,
  } = useFormik<Product>({
    enableReinitialize: true,
    initialValues: {
      clave: "",
      claveAlterna: "",
      servicio: false,
      descripcion: "",
      categoria: "",
      departamento: "",
      unidadCompra: "",
      unidadVenta: "",
      precioCompra: 0,
      precioCompraWI: 0,
      precioCompraProm: 0,
      precioCompraPromWI: 0,
      claveSAT: "",
      inventarioMaximo: 0,
      inventarioMinimo: 0,
      loteSerie: false,
      receta: false,
      granel: false,
      productImage: undefined,
      caracteristicas: "",
      tags: [],
      impuestos: { iva: false, ieps: false },
      precio1: {
        precioVenta: 0,
        utilidad: 0,
        precioVentaNeto: 0,
        unidadesMayoreo: 0,
      },
      precio2: {
        precioVenta: 0,
        utilidad: 0,
        precioVentaNeto: 0,
        unidadesMayoreo: 0,
      },
      precio3: {
        precioVenta: 0,
        utilidad: 0,
        precioVentaNeto: 0,
        unidadesMayoreo: 0,
      },
      precio4: {
        precioVenta: 0,
        utilidad: 0,
        precioVentaNeto: 0,
        unidadesMayoreo: 0,
      },
    },
    validationSchema: Yup.object().shape({
      clave: Yup.string().required("Campo Obligatorio"),
      unidadCompra: Yup.string().required("Campo Obligatorio"),
      unidadVenta: Yup.string().required("Campo Obligatorio"),
      precioCompra: Yup.number().required("Campo Obligatorio"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(`Enviando Formulario: ${values.clave}`);
      console.log(values);
      resetForm();
      setTags([]);
      setFile(undefined);
      onClose();
      AppToast().fire({
        icon: "success",
        title: "Articulo agregado",
        text: "El artículo fue agregado correctamente",
      });
    },
  });

  return (
    <AppModal
      size="6xl"
      isVisible={isVisible}
      onClose={() => {
        onClose();
      }}
    >
      <AppModalOverlay>
        <AppModalContent>
          <AppModalHeader>
            <div className="ml-10">Agregar Artículo</div>
          </AppModalHeader>
          <AppModalCloseButton />
          <AppModalBody>
            <div className="grid grid-cols-1" ref={parent}>
              <AppTabs
                index={selectedTab}
                onChange={(index) => setSelectedTab(index)}
              >
                <AppTabList>
                  <AppTab>Detalle de Artículo</AppTab>
                  <AppTab>Adicionales</AppTab>
                  <AppTab>Imágenes</AppTab>
                  <AppTab>Tags</AppTab>
                  <AppTab>Proveedores</AppTab>
                </AppTabList>
                <form onSubmit={handleSubmit}>
                  <div ref={parent}>
                    <AppTabPanels>
                      <AppTabPanel>
                        <ProductDetailForm
                          values={values}
                          handleChange={handleChange}
                          errors={errors}
                          handleBlur={handleBlur}
                          touched={touched}
                          setFieldValue={setFieldValue}
                        />
                      </AppTabPanel>
                      <AppTabPanel>
                        <ProductAditionalForm
                          values={values}
                          handleChange={handleChange}
                          errors={errors}
                          handleBlur={handleBlur}
                          touched={touched}
                          setFieldValue={setFieldValue}
                        />
                      </AppTabPanel>
                      <AppTabPanel>
                        <ProductImageForm
                          file={file}
                          onUpload={onChange}
                          values={values}
                          handleChange={handleChange}
                          setFieldValue={setFieldValue}
                        />
                      </AppTabPanel>
                      <AppTabPanel>
                        <ProductTagsForm
                          addTags={addTags}
                          tags={tags}
                          deleteTag={deleteTag}
                          values={values}
                          setFieldValue={setFieldValue}
                        />
                      </AppTabPanel>
                      <AppTabPanel>
                        <ProductProviderForm />
                      </AppTabPanel>
                    </AppTabPanels>
                  </div>
                </form>
              </AppTabs>
            </div>
          </AppModalBody>
          <AppModalFooter>
            <div className=" flex flex-row gap-2">
              <div>
                <AppButton onClick={onClose}>Cancelar</AppButton>
              </div>
              <div>
                <AppButton
                  colorScheme="primary"
                  leftIcon={<BiSave size={20} />}
                  type="submit"
                  onClick={() => handleSubmit()}
                >
                  Guardar
                </AppButton>
              </div>
            </div>
          </AppModalFooter>
        </AppModalContent>
      </AppModalOverlay>
    </AppModal>
  );
};
