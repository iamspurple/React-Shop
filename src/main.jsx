import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./firebase.js";
import { SkeletonTheme } from "react-loading-skeleton";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SkeletonTheme baseColor="#b4b4b4" highlightColor="#fff">
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </SkeletonTheme>
  </StrictMode>
);
