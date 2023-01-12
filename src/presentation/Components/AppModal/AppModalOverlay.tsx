import React, { ReactNode } from "react";

export interface AppModalOverlayProps {
  children?: ReactNode;
}

export const AppModalOverlay = ({ children }: AppModalOverlayProps) => (
  <div className="w-full min-h-screen bg-black bg-opacity-60">
    <div className="container mx-auto  pt-5 py-16">{children}</div>
  </div>
);
