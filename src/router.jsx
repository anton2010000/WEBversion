import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { MainPage } from "./pages/MainPage";
import Catalog from "./pages/Catalog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
    ],
  },
]);
