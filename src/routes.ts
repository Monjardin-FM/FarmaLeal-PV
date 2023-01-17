import { ChangePasswordManagerPage } from "./modules/ChangePassword/change-passowrd-manager-page";
import { SelectClientMandateForm } from "./modules/Customer/web/components/login-client-mandate-form";
import { SellsManagerPage } from "./modules/Sells/sells-manager-page";
import { RegisterCutManagerPage } from "./modules/Register-Cut/register-cut-manager-page";
import { AppHome } from "./presentation/Components/AppHome/index";
import { InventaryManagerPage } from "./modules/Inventary/Inventary-manager-page";
import { ProductsManagerPage } from "./modules/Products/web/components/app-products-manager-page";
import { IRoute } from "./modules/Router/AppRouter";
import { LoginApp } from "./modules/User/web/components/login-app";
import { AppLayout } from "./presentation/Components/AppLayout/index";

export const routes: IRoute[] = [
  {
    key: "auth-user",
    path: "/sign",
    component: LoginApp,
  },
  {
    key: "client-mandate-selector",
    path: "/clientmandateselector",
    component: SelectClientMandateForm,
  },
  {
    key: "private-layout",
    path: "/",
    component: AppLayout,
    routes: [
      {
        key: "sells-view",
        path: "/ventas",
        component: SellsManagerPage,
      },

      {
        key: "products-view",
        path: "/articulos",
        component: ProductsManagerPage,
      },
      {
        key: "inventary-view",
        path: "/inventario",
        component: InventaryManagerPage,
      },
      {
        key: "register-cut-view",
        path: "/cortecaja",
        component: RegisterCutManagerPage,
      },
      {
        key: "change-password",
        path: "/changepassword",
        component: ChangePasswordManagerPage,
      },
      {
        key: "home-view",
        path: "/",
        component: AppHome,
      },
    ],
  },
];
