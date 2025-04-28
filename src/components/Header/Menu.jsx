import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Constants } from "../../utils";
import { DataContext } from "../../context/DataContext";
import { useWindowScroll } from "../../resuable/useReize";

const Menu = () => {
  const { scrollY } = useWindowScroll();
  const webData = useContext(DataContext);
  return (
    <Nav>
      <ul className="main_manu_wrapper">
        {webData.All_Data.menuData.map((ele, i) => (
          <li key={i}>
            <NavLink
              to={ele.href}
              className={({ isActive }) => (isActive ? "active" : "")}
              style={
                scrollY > 200
                  ? { color: Constants.Colors.primary_color }
                  : { color: Constants.Colors.white_color }
              }
            >
              {ele.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  .main_manu_wrapper {
    height: 100%;
    display: flex;
    gap: 2rem;
    list-style: none;

    @media only screen and (max-width: 1030px) {
      gap: 1rem;
    }

    li {
      position: relative;
      & > a {
        background-color: inherit;
        height: 100%;
        font-size: 1.6rem;
        text-transform: uppercase;
        color: ${Constants.Colors.white_color};
        transition: ease-in-out 0.3s;
        @media only screen and (max-width: 810px) {
          font-size: 1.4rem;
        }
        &:hover {
          color: ${Constants.Colors.secondary_color} !important;
        }
      }

      .active {
        color: ${Constants.Colors.secondary_color} !important;
      }

      & > ul {
        position: absolute;
        list-style: none;
        background-color: ${Constants.Colors.white_color};
        padding: 1rem;
        border-radius: 0.4rem;
        border-top: 6px solid ${Constants.Colors.secondary_color};
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        /* top: 4rem; */

        li {
          & > a {
            display: block;
            /* background-color: red; */
            width: max-content;
            color: #000;
            padding: 0.6rem 0;
          }
        }
      }
    }
  }
`;

export default Menu;
