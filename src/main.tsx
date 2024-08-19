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
      { path: "/proposta-comercial/:id", element: <Proposta_comercial /> }, // Rota dinâmica com parâmetro ID
      { path: "*", element: <h1>404 - Página não encontrada</h1> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
