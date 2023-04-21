import React from "react";
import { AppRouter } from "./modules/Router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import {
  AppContext,
  appContextDefaultValue,
} from "./utils/context/app.context";
import { routes } from "./routes";
// import "./assets/css/react-datepicker.css";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <Provider store={store}>
      <AppContext.Provider value={appContextDefaultValue}>
        <AppRouter routes={routes} />
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
