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
                ? { backgroundColor: Constants.Colors.secondary_color, color: "white" }
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
      padding: .7rem 1.2rem;
      color: ${Constants.Colors.primary_color};
      letter-spacing: 0.1rem;
      font-size: 1.6rem;
      border-radius: 2rem;
      background-color: #f1f1f1;
      cursor: pointer;
      text-transform: capitalize;
      transition: cubic-bezier(.17,.67,.71,.1) .3s;
    }

    /* .active {
        background-color: blue;
    } */
  }
`;
export default ResuableTabs;
