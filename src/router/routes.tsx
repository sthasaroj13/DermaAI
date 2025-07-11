import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);
