import React from "react";
import { ResuableHeader } from "../../components";
import Destination_Card from "../../components/Destination_Card";
import styled from "styled-components";

const Ladakh_Destination = () => {
  return (
    <Section>
      <ResuableHeader title="Ladakh Destinations" />
      <div className="ladakh_destinations_Wrapper">
        {[1, 2, 3, 4, 5, 6].map((ele, i) => (
          <Destination_Card />
        ))}
      </div>
    </Section>
  );
};

const Section = styled.div`
  .ladakh_destinations_Wrapper {
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

export default Ladakh_Destination;
