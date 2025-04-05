import React, { useState } from "react";
import styled from "styled-components";
import { Constants } from "../utils";

const ResuableTabs = ({ tab_title, activeTab, handleCategoryChange }) => {
  return (
    <Tabs>
      <ul>
        {tab_title?.map((ele, i) => (
          <li
            onClick={() => handleCategoryChange(ele)}
            key={i}
            style={
              activeTab === ele
                ? { backgroundColor: Constants.Colors.secondary_color }
                : null
            }
          >
            {ele}
          </li>
        ))}
      </ul>
    </Tabs>
  );
};

const Tabs = styled.div`
  padding: 2rem 10rem 0 10rem;
  /* background-color: red; */
  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem 0 2rem;
  }

  > ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    li {
      padding: .6rem 1rem;
      color: ${Constants.Colors.primary_color};
      letter-spacing: 0.1rem;
      font-size: 1.6rem;
      border-radius: 0.4rem;
      background-color: #e3e2e2;
      cursor: pointer;
      text-transform: capitalize;
    }

    /* .active {
        background-color: blue;
    } */
  }
`;
export default ResuableTabs;
