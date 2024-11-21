import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {Root} from "./routes/Root";
import {Home} from "./pages/Home";
import {Pizza} from "./pages/Pizza";
import {Pasta} from "./pages/Pasta";
import {Drinks} from "./pages/Drinks";
import {Deserts} from "./pages/Deserts";
import { HeaderProvider } from "./components/context/HeaderContext";
import { CartAsideProvider } from "./components/context/CartAsideContext";
import { AddedArrayProvider } from "./components/context/AddedArrayContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pizza", element: <Pizza /> },
      { path: "/pasta", element: <Pasta /> },
      { path: "/drinks", element: <Drinks /> },
      { path: "/deserts", element: <Deserts /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderProvider> 
      <AddedArrayProvider>
        <CartAsideProvider>
          <RouterProvider router={router} />
        </CartAsideProvider>
      </AddedArrayProvider>  
    </HeaderProvider>
  </React.StrictMode>
);


