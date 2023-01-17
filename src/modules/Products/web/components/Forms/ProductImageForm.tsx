import React, { useEffect, useState } from "react";
import { AppFormField } from "../../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../../presentation/Components/AppForm/AppFormLabel";
import { FileUploader } from "react-drag-drop-files";
import { AppCardFileStatus } from "../../../../../presentation/Components/AppCardFileStatus";
import Clip from "../../../../../assets/json/clip.json";
import SelectFile from "../../../../../assets/json/selectfile.json";
import Drop from "../../../../../assets/json/Drop.json";
import { AppToast } from "../../../../../presentation/Components/AppToastNotification";
import NotImage from "../../../../../assets/img/Image_not_available.png";
import { ImCancelCircle } from "react-icons/im";
import { Product } from "../../../domain/entities/product";
import { FormikErrors } from "formik";
export type ProductImageProps = {
  file: File | undefined;
  onUpload: (file: File | null) => void;
  values: Product;
  handleChange: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<Product>>;
};

export const ProductImageForm = ({
  file,
  onUpload,
  values,
  handleChange,
  setFieldValue,
}: ProductImageProps) => {
  const [dragging, setDragging] = useState(false);
  const [picture, setPicture] = useState<any>(Drop);
  const [preview, setPreview] = useState("");
  const onChange = (file: File) => {
    setDragging(false);
    onUpload(file);
  };
  const handleError = () => {
    console.log("El tipo de archivo debe de ser una imagen");
    AppToast().fire({
      icon: "error",
      title: "Tipo de Archivo no admitido",
      text: "Solo son admitidos archivos .jpg y .png",
    });
  };
  useEffect(() => {
    if (dragging) {
      setPicture(Clip);
    } else {
      setPicture(Clip);
    }
  }, [dragging]);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  }, [file]);

  useEffect(() => {
    if (file) setFieldValue("productImage", file);
    else setFieldValue("productImage", undefined);
  }, [file]);

  return (
    <div className=" flex flex-col justify-center items-center gap-y-5 ">
      <div className="grid grid-cols-3 grid-rows-1 gap-x-5  h-60 items-center">
        <div className="col-span-1"></div>
        <div className="col-span-1" draggable={true}>
          <FileUploader
            hoverTitle=""
            handleChange={onChange}
            name="productImage"
            types={["png", "jpg"]}
            onTypeError={(err: any) => {
              handleError();
            }}
          >
            {dragging ? (
              <AppCardFileStatus
                picture={picture}
                end={() => {
                  setDragging(true);
                  setPicture(Clip);
                }}
                title="Cargar Archivo"
                text="Suelta el archivo para cargarlo"
              />
            ) : file ? (
              <AppCardFileStatus
                picture={SelectFile}
                start={() => setDragging(true)}
                title="Archivo seleccionado"
                text={file.name}
              />
            ) : (
              <AppCardFileStatus
                picture={Drop}
                start={() => setDragging(true)}
                title="Cargar Archivo"
                text="Arrastra un archivo para cargarlo"
              />
            )}
          </FileUploader>
        </div>
        {file ? (
          <div className="col-span-1 flex flex-row items-center justify-center">
            <div className="w-56 rounded-xl border border-white border-opacity-40">
              <div className="relative">
                <div
                  className="absolute -right-2 -top-1 text-white bg-danger-600 rounded-full  p-1 hover:cursor-pointer hover:bg-danger-300 transition duration-200"
                  onClick={() => {
                    onUpload(null);
                  }}
                >
                  <ImCancelCircle size={15} />
                </div>
                <img src={preview} alt="" className="rounded-xl p-1" />
              </div>
            </div>
          </div>
        ) : (
          <div className="col-span-1 flex flex-row items-center justify-center bg-black bg-opacity-25 rounded-xl m-5 border border-white border-opacity-40">
            <img src={NotImage} alt="" />
          </div>
        )}
      </div>

      <div className="">
        <AppFormField>
          <AppFormLabel>Características:</AppFormLabel>
          <textarea
            name="caracteristicas"
            value={values.caracteristicas}
            onChange={handleChange}
            className="bg-black bg-opacity-30 text-sm text-white border border-gray-50 border-opacity-40 rounded-lg p-5"
            rows={4}
            cols={60}
          ></textarea>
        </AppFormField>
      </div>
    </div>
  );
};
