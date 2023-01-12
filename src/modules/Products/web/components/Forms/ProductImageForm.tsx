import React, { useEffect, useState } from "react";
import { AppFormField } from "../../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../../presentation/Components/AppForm/AppFormLabel";
import { FileUploader } from "react-drag-drop-files";
import { AppCardFileStatus } from "../../../../../presentation/Components/AppCardFileStatus";
import Upload from "../../../../../assets/json/upload.json";
import SelectFile from "../../../../../assets/json/selectfile.json";
import Drop from "../../../../../assets/json/Drop.json";

export type ProductImageProps = {
  file: File | undefined;
  onUpload: (file: File) => void;
};

export const ProductImageForm = ({ file, onUpload }: ProductImageProps) => {
  const [dragging, setDragging] = useState(false);
  const [picture, setPicture] = useState<any>(Drop);
  const onChange = (file: File) => {
    setDragging(false);
    onUpload(file);
  };
  const handleError = () => {
    console.log("El tipo de archivo debe de ser una imagen");
  };
  useEffect(() => {
    if (dragging) {
      setPicture(Upload);
    } else {
      setPicture(Upload);
    }
  }, [dragging]);
  return (
    <div className=" flex flex-col justify-center items-center gap-y-5 ">
      <div className="w-2/6">
        <FileUploader
          hoverTitle="Suelta el archivo para cargarlo"
          handleChange={onChange}
          name="imageProduct"
          types={["png", "jpg"]}
          onTypeError={(err: any) => {
            handleError();
          }}
          // onDrop={() => {
          //   setPicture(SelectFile);
          // }}
          // onSelect={() => setPicture(SelectFile)}
          className="w-3/4 border border-danger-500"
        >
          {dragging ? (
            <AppCardFileStatus
              picture={picture}
              end={() => {
                setDragging(true);
                setPicture(Upload);
              }}
              title="Cargar Archivo"
              text="Suelta el archivo para cargarlo"
              styles="w-full bg-black bg-opacity-25 border-dashed text- border-2 cursor-pointer border-gray-300  py-4 rounded-lg flex flex-col items-center justify-center"
            />
          ) : file ? (
            <AppCardFileStatus
              picture={SelectFile}
              start={() => setDragging(true)}
              title="Archivo seleccionado"
              text={file.name}
              styles="w-full bg-black bg-opacity-25 border-dashed text- border-2 cursor-pointer border-gray-300 py-4 rounded-lg flex flex-col items-center justify-center"
            />
          ) : (
            <AppCardFileStatus
              picture={Drop}
              start={() => setDragging(true)}
              title="Cargar Archivo"
              text="Arrastra un archivo para cargarlo"
              styles="w-full bg-black bg-opacity-25 border-dashed text- border-2 cursor-pointer border-gray-300 py-4 rounded-lg flex flex-col items-center justify-center"
            />
          )}
        </FileUploader>
      </div>
      <div className="">
        <AppFormField>
          <AppFormLabel>Características:</AppFormLabel>
          <textarea
            className="bg-black bg-opacity-30 text-sm text-white border border-gray-50 border-opacity-40 rounded-lg p-5"
            rows={4}
            cols={60}
          ></textarea>
        </AppFormField>
      </div>
    </div>
  );
};
