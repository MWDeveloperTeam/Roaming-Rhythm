import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Constants } from "../../utils";
import { URL } from "../../resuable/URL";
import { DataContext } from "../../context/DataContext";

const Menu = () => {
  const webData = useContext(DataContext);

  const [showDrowDown, setShowDrowDown] = useState(false);
  const [showDesDrowDown, setShowDesDrowDown] = useState(false);
  // const menuData = [
  //   { label: "Home", href: URL.Home },
  //   {
  //     label: "packages",
  //     href: URL.Package,
  //   },
  //   { label: "destinations", href: URL.Destinations },
  //   // { label: "gallery", href: URL.Gallery },
  //   { label: "contact", href: URL.Contact },
  // ];

  return (
    <Nav>
      <ul className="main_manu_wrapper">
        {webData.All_Data.menuData.map((ele, i) => (
          <li key={i}>
            <NavLink
              to={ele.href}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {ele.label}
            </NavLink>
          </li>
        ))}

        {/* <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={URL.Kashmir_Destination}
            onMouseOver={() => setShowDrowDown(true)}
            onMouseLeave={() => setShowDrowDown(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            packages
          </NavLink>
          
        </li>
        <li>
          <NavLink
            to={URL.Kashmir_Destination}
            onMouseOver={() => setShowDesDrowDown(true)}
            onMouseLeave={() => setShowDesDrowDown(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            destinations
          </NavLink>
          
        </li>
        <li>
          <NavLink
            to={URL.Contact}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            contact
          </NavLink>
        </li> */}
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
          color: ${Constants.Colors.hover_color};
        }
      }

      .active {
        color: ${Constants.Colors.secondary_color};
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
