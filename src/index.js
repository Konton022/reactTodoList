import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FireBaseContext } from "./context/firebaseContext";

import store from "./store/index";
import { Provider } from "react-redux";
import App from "./App";
import FirebaseClass from "./service/firebase";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <FireBaseContext.Provider value={FirebaseClass}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </FireBaseContext.Provider>
  </Provider>,
  rootElement
);
