import React from "react";
import {
  AppModal,
  AppModalBody,
  AppModalCloseButton,
  AppModalContent,
  AppModalHeader,
  AppModalOverlay,
} from "../../../../../presentation/Components/AppModal";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ResultSearchTableModal } from "../tables/result-search-table-modal";
import { TableSkeleton } from "../../../../../presentation/Components/TableSkeleton";
import { DataNotFound } from "../../../../../presentation/Components/AppDataNotFound";
import { SellsSearchProduct } from "../sells-search-input";
import { ProductPrueba } from "../../../../Products/domain/entities/productprueba";

type ProductsResultSearchModalProps = {
  isVisible: boolean;
  onClose: () => void;
  items?: ProductPrueba[] | undefined;
  loadingProducts: boolean;
  onSearch: (search: string) => void;
  search: string;
  setSearch: (search: string) => void;
};

export const ProductsResultSearchModal = ({
  isVisible,
  onClose,
  items,
  loadingProducts,
  onSearch,
  search,
  setSearch,
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
            <div
              ref={parent}
              className="h-96 overflow-y-auto w-full flex flex-col gap-y-3"
            >
              <div>
                <SellsSearchProduct
                  onSearch={onSearch}
                  search={search}
                  setSearch={setSearch}
                />
              </div>
              {loadingProducts ? (
                <TableSkeleton />
              ) : (
                <div ref={parent}>
                  {items?.length === undefined || items?.length === 0 ? (
                    <div className="flex flex-row justify-center items-center">
                      <div className="max-w-xl">
                        <DataNotFound />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <ResultSearchTableModal items={items} />
                    </div>
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
