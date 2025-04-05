import React from "react";
import { useRoutes } from "react-router-dom";
import { Home, Packages, Contact, Destination } from "./pages/index";
import { Layout } from "./components/index";
import { URL } from "./resuable/URL";

const App = () => {
  const elements = useRoutes([
    {
      path: `${URL.Home}`,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: `${URL.Contact}`,
          element: <Contact />,
        },
        {
          path: `${URL.Package}`,
          element: <Packages />,
        },
        {
          path: `${URL.Destinations}`,
          element: <Destination />,
        },
      ],
    },
  ]);
  return elements;
};

export default App;
