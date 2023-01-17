import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
  let location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
          {routes && routes.length > 0 && (
            <Routes location={location}>
              {routes?.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                >
                  {route.routes?.map((r) => (
                    <Route
                      key={r.key}
                      path={r.path}
                      element={<r.component />}
                    />
                  ))}
                </Route>
              ))}
            </Routes>
          )}
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
