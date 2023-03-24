import React, { ReactNode } from "react";
import { useLockBodyScroll } from "react-use";

export type AppModalSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

export type AppModalContextType = {
  onClose: () => void;
  size: AppModalSize;
  isVisible: boolean;
};

export const AppModalContext = React.createContext<AppModalContextType>({
  onClose: () => {},
  size: "md",
  isVisible: false,
});

export interface AppModalProps {
  onClose?: () => void;
  children?: ReactNode;
  isVisible?: boolean;
  size?: AppModalSize;
}

export const AppModal = ({
  children,
  onClose = () => {},
  isVisible = false,
  size = "md",
}: AppModalProps) => {
  useLockBodyScroll(isVisible);
  return (
    <AppModalContext.Provider value={{ onClose, size, isVisible }}>
      {isVisible && (
        <div className="fixed inset-0 z-50 overflow-y-auto  ">{children}</div>
      )}
    </AppModalContext.Provider>
  );
};
