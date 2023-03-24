import React, { ReactNode } from "react";

export interface AppModalOverlayProps {
  children?: ReactNode;
}

export const AppModalOverlay = ({ children }: AppModalOverlayProps) => (
  <div className="w-full min-h-screen bg-black bg-opacity-75 flex justify-center items-center">
    <div className="container mx-auto">{children}</div>
  </div>
);
