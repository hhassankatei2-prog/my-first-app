import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AppProvider } from "./context/AppProviders";
import { Provider } from "react-redux";
import { store } from "./store";
import { initReactI18next, I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { resources } from "./assets/locals";
import environment from "./environment";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem(environment.lang) || "en",
  resources,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <AppProvider>
          <App />
        </AppProvider>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
