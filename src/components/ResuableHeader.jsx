import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import { Constants } from "../utils";

const ResuableHeader = ({ title }) => {
  return (
    <Section>
      <Spacer />
      <h1>{title}</h1>
    </Section>
  );
};

const Section = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://plus.unsplash.com/premium_photo-1697730150003-26a1d469adb4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
  @media only screen and (max-width: 400px) {
    height: 250px;
  }
  h1 {
    /* text-transform: uppercase; */
    font-size: 6rem;
    font-weight: 900;
    color: ${Constants.Colors.white_color};
    @media only screen and (max-width: 630px) {
      font-size: 5rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 4rem;
    }
    @media only screen and (max-width: 370px) {
      font-size: 3rem;
    }
  }
`;

export default ResuableHeader;
