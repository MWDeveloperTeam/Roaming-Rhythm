import React, { lazy } from "react";

// export { default as Home } from "./home/Home";
// export { default as Destination } from "./destination/Destinations";
// export { default as Ladakh_Destination } from "./destination/Ladakh_Destination";
// export { default as Packages } from "./packages/Packages";
// export { default as Ladakh_Package } from "./packages/Ladakh_Package";
// export { default as Contact } from "./contact/Contact";

export const Home = lazy(() => import("../pages/home/Home"));
export const Destination = lazy(() =>
  import("../pages/destination/Destinations")
);
export const Packages = lazy(() => import("../pages/packages/Packages"));
export const Contact = lazy(() => import("../pages/contact/Contact"));
