import React from "react";
import {
  Banner,
  Guarantee,
  Popular_Packages,
  Popular_Destinations,
} from "../../components/index";
import styled from "styled-components";
const Home = () => {
  return (
    <Section>
      <Banner />
      <Guarantee />
      <Popular_Packages />
      <Popular_Destinations />
    </Section>
  );
};

const Section = styled.div``;

export default Home;
