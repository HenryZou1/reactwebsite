import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from "./index.jsx";
import "./router.css";
import { ThemeProvider } from "../hook/ThemeContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  { path: "/about", element: <Index /> },
]);

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
