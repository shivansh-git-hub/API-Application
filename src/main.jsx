import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import Users from "./components/Users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Login />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
