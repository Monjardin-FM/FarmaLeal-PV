import React, { useState } from "react";
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
    }
  };

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
            <div className="grid grid-cols-1">
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
                <AppTabPanels>
                  <AppTabPanel>
                    <ProductDetailForm />
                  </AppTabPanel>
                  <AppTabPanel>
                    <ProductAditionalForm />
                  </AppTabPanel>
                  <AppTabPanel>
                    <ProductImageForm file={file} onUpload={onChange} />
                  </AppTabPanel>
                  <AppTabPanel>
                    <ProductTagsForm
                      addTags={addTags}
                      tags={tags}
                      deleteTag={deleteTag}
                    />
                  </AppTabPanel>
                  <AppTabPanel>
                    <ProductProviderForm />
                  </AppTabPanel>
                </AppTabPanels>
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
