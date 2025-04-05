import React, { useContext, useState } from "react";
import { ResuableHeader, ResuableTabs } from "../../components";
import Destination_Card from "../../components/Destination_Card";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("All");
  const WebData = useContext(DataContext);
  const { destinations } = WebData.All_Data;

  const filteredPackages =
    activeTab === "All"
      ? destinations
      : destinations?.filter((pkg) => pkg.destination_type === activeTab);

  const handleCategoryChange = (category) => {
    setActiveTab(category);
  };

  return (
    <Section>
      <ResuableHeader title="Destinations" />
      <ResuableTabs
        tab_title={["All", "Kashmir", "Ladakh"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="Kashmir_destinations_Wrapper">
        {filteredPackages.map((ele, i) => (
          <Destination_Card key={i} img={ele?.img} title={ele?.title} />
        ))}
      </div>
    </Section>
  );
};

const Section = styled.div`
  .Kashmir_destinations_Wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem 10rem 5rem 10rem;
    /* margin-top: 4rem; */
    @media only screen and (max-width: 1340px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }

    @media only screen and (max-width: 768px) {
      padding: 2rem;
    }
  }
`;

export default Destinations;
