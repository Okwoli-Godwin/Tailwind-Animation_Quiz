import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

export const Elements = createBrowserRouter([
  
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        
      },
    ],
  },
]);
