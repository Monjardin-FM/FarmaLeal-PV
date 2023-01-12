import React, { ReactNode } from "react";
import { UIColorScheme } from "../../types/UIColorScheme";
import clsx from "clsx";
import { AppInputIcon } from "./AppInputIcon";

export type AppInputProps = {
  colorSchema?: UIColorScheme;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

export function AppInput<P>(WrappedComponent: React.ComponentType<P>) {
  const Component = (props: P & AppInputProps) => {
    const { colorSchema, leftIcon, rightIcon, ...allProps } = props;
    const componentProps: P = {
      ...(allProps as P),
      className: clsx(
        "w-full h-10 font-medium appearance-none focus:outline-none rounded-md trasition duration-200 bg-black bg-opacity-30 focus:bg-white focus:bg-opacity-100 focus:text-primary-700 text-white border border-gray-100 border-opacity-30 focus:border-primary-500 py-3 focus:ring-transparent disabled:text-gray-600 disabled:cursor-not-allowed",
        {
          "pl-12": props.leftIcon,
          "pl-4": !props.leftIcon,
          "pr-12": props.rightIcon,
          "pr-4": !props.rightIcon,
          "border-gray-200": !props.colorSchema || props.colorSchema === "gray",
          "border-primary-500": props.colorSchema === "primary",
          "border-success-500": props.colorSchema === "success",
          "border-info-500": props.colorSchema === "info",
          "border-warn-500": props.colorSchema === "warn",
          "border-danger-500": props.colorSchema === "danger",
        },
        props.className
      ),
    };
    return (
      <div
        className={clsx("w-full", {
          relative: props.leftIcon || props.rightIcon,
        })}
      >
        <WrappedComponent {...(componentProps as any)} />
        {props.leftIcon && (
          <AppInputIcon className="left-0">{props.leftIcon}</AppInputIcon>
        )}
        {props.rightIcon && (
          <AppInputIcon className="left-0">{props.rightIcon}</AppInputIcon>
        )}
      </div>
    );
  };
  return Component;
}
