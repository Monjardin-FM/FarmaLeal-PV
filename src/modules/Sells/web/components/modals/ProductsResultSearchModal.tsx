import React from "react";
import {
  AppModal,
  AppModalBody,
  AppModalCloseButton,
  AppModalContent,
  AppModalHeader,
  AppModalOverlay,
} from "../../../../../presentation/Components/AppModal";
import { ProductPrueba } from "../../../../Products/domain/entities/productprueba";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ResultSearchTableModal } from "../tables/result-search-table-modal";
import { TableSkeleton } from "../../../../../presentation/Components/TableSkeleton";
import { DataNotFound } from "../../../../../presentation/Components/AppDataNotFound";

type ProductsResultSearchModalProps = {
  isVisible: boolean;
  onClose: () => void;
  items?: ProductPrueba[] | undefined;
  loadingProducts: boolean;
};

export const ProductsResultSearchModal = ({
  isVisible,
  onClose,
  items,
  loadingProducts,
}: ProductsResultSearchModalProps) => {
  const [parent] = useAutoAnimate({ duration: 300 });

  return (
    <AppModal size="4xl" isVisible={isVisible} onClose={() => onClose()}>
      <AppModalOverlay>
        <AppModalContent>
          <AppModalHeader>
            <div className="ml-10">Productos</div>
          </AppModalHeader>
          <AppModalCloseButton />
          <AppModalBody>
            <div ref={parent} className="h-96 overflow-y-auto w-full">
              {loadingProducts ? (
                <TableSkeleton />
              ) : (
                <div>
                  {items?.length === undefined || items?.length === 0 ? (
                    <div className="flex flex-row justify-center items-center">
                      <div className="max-w-xl">
                        <DataNotFound />
                      </div>
                    </div>
                  ) : (
                    <ResultSearchTableModal items={items} />
                  )}
                </div>
              )}
            </div>
          </AppModalBody>
        </AppModalContent>
      </AppModalOverlay>
    </AppModal>
  );
};
