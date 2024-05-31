import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import PAGE_KEYS from "../constants";
import { useState } from "react";

function Layout() {
  const [activePage, setActivePage] = useState(PAGE_KEYS.HOME);
  let currentLocation = useLocation();

  return (
    <div id="app">
      <Navbar currentPath={currentLocation.pathname} />
      <div id="main-content">
        <ScrollRestoration />
        <Outlet />
        {/* Renders Pages as children of this layout. 
        By doing this, navbar and footer do not have to be rerendered every time. */}
      </div>
      <Footer currentPath={currentLocation.pathname} />
      <ScrollRestoration />
    </div>
  );
}

export default Layout;
