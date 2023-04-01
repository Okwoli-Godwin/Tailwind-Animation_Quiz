import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Gamezone from "../pages/Landingpage/Gamezone";

export const Elements = createBrowserRouter([
  
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/gamezone",
        element: <Gamezone/>,
      },
    ],
  },
]);
