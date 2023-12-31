import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/error/ErrorPage";
import SharedLayout from "./components/layout/SharedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/order/:name",
        element: <OrderPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}>{router}</RouterProvider>;
}
