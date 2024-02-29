import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import TotalUsers from "./Pages/TotalUsers";
import TotalPartners from "./Pages/TotalPartners";
import TotalOrders from "./Pages/TotalOrders";
import TotalBooking from "./Pages/TotalBooking";
import TotalProducts from "./Pages/TotalProducts";
import TotalRefer from "./Pages/TotalRefer";
import Login from "./Login/Login";
import Layout from "./Layout/Layout";
import Allservices from "./Pages/Allservices";
import Notification from "./Pages/Notification";
import PrivateRoute from "./Utils/PrivateRoute";
import Jobsinfo from "./Pages/Jobsinfo";
import Banners from "./Pages/Banners";
import TodoList from "./Pages/TodoList";
import Allfiles from "./Pages/Allfiles";
import Permissions from "./Pages/Permissions";
import Racrepaircenter from "./Pages/Racrepaircenter";
// import { lazy } from "react";
// const Racrepaircenter = lazy(() => import("./Pages/Racrepaircenter"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/dashboard", element: <PrivateRoute element={<Dashboard />} /> },
      {
        path: "/TotalUsers",
        element: <PrivateRoute element={<TotalUsers />} />,
      },
      {
        path: "/TotalPartners",
        element: <PrivateRoute element={<TotalPartners />} />,
      },
      {
        path: "/TotalOrders",
        element: <PrivateRoute element={<TotalOrders />} />,
      },
      {
        path: "/TotalBookings",
        element: <PrivateRoute element={<TotalBooking />} />,
      },
      { path: "/Jobsinfo", element: <PrivateRoute element={<Jobsinfo />} /> },
      {
        path: "/TotalRefer",
        element: <PrivateRoute element={<TotalRefer />} />,
      },
      {
        path: "/Allservices",
        element: <PrivateRoute element={<Allservices />} />,
      },
      {
        path: "/Notification",
        element: <PrivateRoute element={<Notification />} />,
      },
      {
        path: "/TotalProducts",
        element: <PrivateRoute element={<TotalProducts />} />,
      },
      { path: "/Banners", element: <PrivateRoute element={<Banners />} /> },
      { path: "/Todolist", element: <PrivateRoute element={<TodoList />} /> },
      { path: "/Allfiles", element: <PrivateRoute element={<Allfiles />} /> },
      {
        path: "/Permissions",
        element: <PrivateRoute element={<Permissions />} />,
      },
      {
        path: "/Racrepaircenter",
        element: <PrivateRoute element={<Racrepaircenter />} />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
