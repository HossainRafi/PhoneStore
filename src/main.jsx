import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <h1>Home</h1>
      },
      {
        path: "/about",
        element: <h1>About</h1>
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
