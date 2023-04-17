import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FirebaseContextProvider } from "./context/FirebaseContext";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <FirebaseContextProvider>
        <RouterProvider router={routes} />
      </FirebaseContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
