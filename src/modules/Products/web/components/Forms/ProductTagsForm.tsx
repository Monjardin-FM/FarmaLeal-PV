import React, { useState } from "react";
import { AppFormField } from "../../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../../presentation/Components/AppTextField";
import { AppButton } from "../../../../../presentation/Components/AppButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

export type ProductTagsFormProps = {
  tags: string[];
  addTags: (tag: string) => void;
  deleteTag: (idTag: number) => void;
};
export const ProductTagsForm = ({
  tags,
  addTags,
  deleteTag,
}: ProductTagsFormProps) => {
  const [tag, setTag] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-12  w-full">
        <div className="col-span-6 ">
          <div className="flex flex-row  justify-center gap-5 mb-5">
            <div className="w-full">
              <AppFormField>
                <AppFormLabel>Tag:</AppFormLabel>
                <AppTextField
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                />
              </AppFormField>
            </div>
            <div className="place-self-end">
              <AppButton
                size="sm"
                colorScheme="primary"
                leftIcon={<AiOutlinePlusCircle color="white" size={20} />}
                onClick={() => {
                  addTags(tag);
                  setTag("");
                }}
              >
                Agregar
              </AppButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-3/5 border border-white border-opacity-20 h-fit self-start rounded-lg bg-black bg-opacity-25 p-5 gap-2">
        {tags.map((t, index) => (
          <div key={index} className="text-sm h-fit">
            <div className="bg-primary-500 rounded-xl flex flex-row justify-center items-center px-3 py-1 w-fit gap-1">
              <div
                className=" hover:cursor-pointer hover:text-danger-500 transition duration-100"
                onClick={() => deleteTag(index)}
              >
                <MdOutlineCancel></MdOutlineCancel>
              </div>
              <div>{t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
