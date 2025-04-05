import React, { useContext, useState } from "react";
import { Model, ResuableHeader, ResuableTabs } from "../../components/index";
import styled from "styled-components";
import Packages_Card from "../../components/Packages_Card";
import { DataContext } from "../../context/DataContext";

const Packages = () => {
  const [activeTab, setActiveTab] = useState("All");
  const webData = useContext(DataContext);
  const { packages } = webData.All_Data;
  const { open } = webData;

  const filteredPackages =
    activeTab === "All"
      ? packages
      : packages?.filter((pkg) => pkg.package_type === activeTab);

  const handleCategoryChange = (category) => {
    setActiveTab(category);
  };

  return (
    <Section>
      <ResuableHeader title={"Packages"} />
      <ResuableTabs
        tab_title={["All", "Kashmir", "Ladakh"]}
        activeTab={activeTab}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="Kashmirpackages_Wrapper">
        {filteredPackages.map((ele, i) => (
          <Packages_Card key={i} pkg={ele} />
        ))}
      </div>
      {open && <Model />}
    </Section>
  );
};

const Section = styled.div`
  .Kashmirpackages_Wrapper {
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

export default Packages;
