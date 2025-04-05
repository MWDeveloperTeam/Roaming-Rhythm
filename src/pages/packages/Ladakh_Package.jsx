import React from "react";
import styled from "styled-components";
import { ResuableHeader } from "../../components";
import Packages_Card from "../../components/Packages_Card";

const Ladakh_Package = () => {
  return (
    <Section>
      <ResuableHeader title={"Ladakh Packages"} />
      <div className="ladakh_packages_Wrapper">
        {[1, 2, 3, 4, 5, 6].map((ele, i) => (
          <Packages_Card key={i} />
        ))}
      </div>
    </Section>
  );
};

const Section = styled.div`
  .ladakh_packages_Wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 5rem 10rem;
    /* margin-top: 4rem; */
    @media only screen and (max-width: 1340px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }

    @media only screen and (max-width: 768px) {
      padding: 5rem 2rem;
    }
  }
`;

export default Ladakh_Package;
