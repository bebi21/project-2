import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../page/Home/Home";

import Login from "../page/Login/Login";
import Register from "./../page/Register/Register";

const handleGetValue = (value) => {
  console.log(value);
};

// chia router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Root />
      </>
    ),
    errorElement: <div>tran web bị lỗi</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register />
      </>
    ),
  },
]);

export default router;
