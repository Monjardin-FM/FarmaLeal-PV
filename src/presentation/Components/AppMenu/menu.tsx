import React from "react";
import {
  AppModal,
  AppModalBody,
  AppModalCloseButton,
  AppModalContent,
  AppModalHeader,
  AppModalOverlay,
} from "../AppModal";
import { MenuItemLink } from "./MenuItem";
import Sells from "../../../assets/json/money.json";
import Inventary from "../../../assets/json/inventary.json";
import Register from "../../../assets/json/sells.json";
import Return from "../../../assets/json/returns.json";
import Reports from "../../../assets/json/reports.json";
import Invoice from "../../../assets/json/invoice.json";
import AddProduct from "../../../assets/json/addproduct.json";
import Roles from "../../../assets/json/roles.json";
import Password from "../../../assets/json/password.json";
import Finance from "../../../assets/json/finance.json";

type MenuProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const Menu = ({ isVisible, onClose }: MenuProps) => {
  return (
    <AppModal size="6xl" isVisible={isVisible} onClose={() => onClose()}>
      <AppModalOverlay>
        <AppModalContent>
          <AppModalHeader></AppModalHeader>
          <AppModalCloseButton />
          <AppModalBody>
            <div className="grid grid-cols-12 gap-5 items-center justify-center">
              <MenuItemLink
                lottie={Sells}
                label="Ventas"
                to="/ventas"
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={Register}
                label="Corte de Caja"
                to="/cortecaja"
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={Return}
                label="Devoluciones"
                to=""
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={Inventary}
                label="Ajuste de Inventario"
                to=""
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={Reports}
                label="Reportes"
                to=""
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={Invoice}
                label="Facturación"
                to=""
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={AddProduct}
                label="Agregar artículos"
                to="/articulos"
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={Roles}
                label="Asignación de roles"
                to=""
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={Password}
                label="Cambio de contraseña"
                to=""
                onClose={() => onClose()}
              />
              <MenuItemLink
                lottie={Finance}
                label="Estados financieros"
                to=""
                onClose={() => onClose()}
              />
            </div>
          </AppModalBody>
        </AppModalContent>
      </AppModalOverlay>
    </AppModal>
  );
};
