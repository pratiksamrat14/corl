import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Importing Layouts
const BasicLayout = lazy(() => import("./layout/BasicLayout"));
const AuthLayout = lazy(() => import("./layout/AuthLayout"));

// Importing Pages
const Home = lazy(() => import(/* Importing Home Page */"./pages/Home"));
const Login = lazy(() => import(/* Importing Login Page */"./pages/Session/Login"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [{ path: "", element: <Login /> }],
  },
  {
    path: "/home",
    element: <AuthLayout />,
    children: [{ path: "", element: <Home /> }],
  },
]);
