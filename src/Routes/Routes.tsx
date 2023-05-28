import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Gamezone from "../pages/Landingpage/Gamezone";

export const Elements = createBrowserRouter([
  
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        path: "/gamezone",
        element: <Gamezone/>,
      },
    ],
  },
]);
