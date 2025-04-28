import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Whatsapp } from "../components/index";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <Section>
      <div className="main_container">
        <Header />
        <Outlet />
        <Footer />
        <Whatsapp />
      </div>
      <Toaster />
    </Section>
  );
};

const Section = styled.section`
  .main_container {
    max-width: 1920px;
    height: auto !important;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
`;

export default Layout;
