import React from "react";
import { Alert, Zoom } from "@mui/material";

export interface AppErrorFormProps
  extends React.ComponentPropsWithoutRef<"div"> {
  errorName: any;
  errorFlag: boolean;
}

export const AppErrorForm = ({
  errorName,
  errorFlag,
  children,
  ...props
}: AppErrorFormProps) => {
  return (
    <Zoom in={errorFlag} {...props}>
      <div className="border border-danger-700 rounded-md border-opacity-20">
        <Alert severity="error" className="text-xs">
          {errorName}
        </Alert>
      </div>
    </Zoom>
  );
};
