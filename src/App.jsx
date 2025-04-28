import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Home, Packages, Contact, Destination } from "./pages/index";
import { Layout } from "./components/index";
import { URL } from "./resuable/URL";
import Loader from "./components/Loader";

const App = () => {
  const elements = useRoutes([
    {
      path: `${URL.Home}`,

      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: `${URL.Contact}`,
          element: (
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: `${URL.Package}`,
          element: (
            <Suspense fallback={<Loader />}>
              <Packages />
            </Suspense>
          ),
        },
        {
          path: `${URL.Destinations}`,
          element: (
            <Suspense fallback={<Loader />}>
              <Destination />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return elements;
};

export default App;
