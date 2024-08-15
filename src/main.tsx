import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Contato from "./pages/Contato.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Proposta_comercial from "./pages/Proposta_comercial.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contato /> },
      { path: "*", element: <h1>404</h1> },
      { path: "/proposta-comercial", element: <Proposta_comercial /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
