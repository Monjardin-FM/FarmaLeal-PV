import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../index.css";

export interface IRoute {
  key: string | number;
  path: string;
  component: any;
  routes?: IRoute[];
}

export interface AppRouterProps {
  routes?: IRoute[];
}

export const AppRouter = ({ routes }: AppRouterProps) => {
  return (
    <>
      {routes && routes.length > 0 && (
        <Routes>
          {routes?.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            >
              {route.routes?.map((r) => (
                <Route key={r.key} path={r.path} element={<r.component />} />
              ))}
            </Route>
          ))}
        </Routes>
      )}
    </>
  );
};
