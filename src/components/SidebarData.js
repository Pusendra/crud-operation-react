import React from "react";

import { AiFillCar, AiFillDingtalkCircle, AiFillHome } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Vehicles",
    path: "/vehicles",
    icon: <AiFillCar />,
    cName: "nav-text",
  },
  {
    title: "Brands",
    path: "/brands",
    icon: <AiFillDingtalkCircle />,
    cName: "nav-text",
  },
];
