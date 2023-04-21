import React from "react";
import {
  AppModal,
  AppModalBody,
  AppModalCloseButton,
  AppModalContent,
  AppModalHeader,
  AppModalOverlay,
} from "../../../../presentation/Components/AppModal";
import { AppFormField } from "../../../../presentation/Components/AppForm/AppFormField";
import AppTextField from "../../../../presentation/Components/AppTextField";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { AppFormLabel } from "../../../../presentation/Components/AppForm/AppFormLabel";

export type ModalCountMoneyProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const ModalCountMoney = ({
  isVisible,
  onClose,
}: ModalCountMoneyProps) => {
  return (
    <AppModal isVisible={isVisible} onClose={onClose} size="xl">
      <AppModalOverlay>
        <AppModalContent>
          <AppModalHeader>Contar Dinero</AppModalHeader>
          <AppModalCloseButton />
          <AppModalBody>
            <div className="grid grid-cols-12 gap-2 items-center justify-center text-center">
              <div className="col-span-4">
                <span>CANTIDAD</span>
              </div>
              <div className="col-span-4">
                <span>DENOMINACIÓN</span>
              </div>
              <div className="col-span-4">
                <span>TOTAL</span>
              </div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $1,000</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $500</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $200</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $100</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $50</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $20</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $10</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $5</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $2</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <AppFormField className="col-span-4">
                <AppTextField type="number" min={0} />
              </AppFormField>
              <div className="col-span-4">x $1</div>
              <AppFormField className="col-span-4">
                <AppTextField type="number" disabled={true} />
              </AppFormField>
              <div className="col-span-12">
                <hr />
              </div>
              <AppFormField className="col-span-8 grid grid-cols-2 items-center col-start-5 gap-2">
                <AppFormLabel className="col-span-1">Total:</AppFormLabel>
                <AppTextField className="col-span-1" />
              </AppFormField>
              <div className="col-span-3 items-center text-end col-start-10">
                <AppButton className="w-full " colorScheme="primary">
                  Aceptar
                </AppButton>
              </div>
            </div>
          </AppModalBody>
        </AppModalContent>
      </AppModalOverlay>
    </AppModal>
  );
};
