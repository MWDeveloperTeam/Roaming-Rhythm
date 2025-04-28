import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";
import { IoIosArrowBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { Constants } from "../../utils";
import { URL } from "../../resuable/URL";

const SideMenu = () => {
  const webData = useContext(DataContext);
  const { showSideMenu, setShowSideMenu, All_Data } = webData;

  const handleClose = (e) => {
    if (e.target.id === "main_container_side_bar") {
      setShowSideMenu(!showSideMenu);
    }
  };

  return (
    <SideBar
      id="main_container_side_bar"
      translate={!showSideMenu ? "-100%" : "0%"}
      onClick={handleClose}
    >
      <div className="side_wrapper">
        <div className="close_wrapper">
          <IoIosArrowBack
            id="close_icon"
            onClick={() => setShowSideMenu(false)}
          />
        </div>
        <div className="logo_wrapper">
          <Link to={URL.Home} onClick={() => setShowSideMenu(false)}>
            Roaming Rhythm
          </Link>
        </div>
        <div className="menu_items">
          <ul>
            {All_Data.menuData.map((ele, i) => (
              <li key={i}>
                <NavLink
                  to={ele.href}
                  onClick={() => setShowSideMenu(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {ele.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SideBar>
  );
};

export default SideMenu;

const SideBar = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transform: translate(${(props) => props.translate});
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;

  .side_wrapper {
    width: 90%;
    max-width: 42rem;
    background-color: ${Constants.Colors.white_color};
    height: 100vh;
    position: relative;
    transition: ease-in-out 1s;

    .close_wrapper {
      position: absolute;
      right: -1.4rem;
      top: 2rem;

      svg {
        font-size: 3rem;
        color: ${Constants.Colors.primary_color};
        background-color: ${Constants.Colors.white_color};
        border-radius: 50%;
        padding: 0.5rem;
        cursor: pointer;
        transition: ease-in-out 0.3s;
        &:hover {
          ${Constants.Colors.white_color};
        }
      }
    }

    .logo_wrapper {
      display: flex;

      padding: 4rem 0 0 4rem;

      a {
        font-size: 2.2rem;
        color: ${Constants.Colors.secondary_color};
      }
    }

    .menu_items {
      width: 100%;
      height: auto;
      padding: 4rem;
      /* background-color: red; */

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        row-gap: 4rem;

        li {
          a {
            font-size: 1.8rem;
            color: ${Constants.Colors.primary_color};
            font-weight: 700;
            letter-spacing: 0.1rem;
            transition: ease-in-out 0.3s;
            text-transform: uppercase;

            &:hover {
              ${Constants.Colors.white_color};
            }
          }
          .active {
            color: ${Constants.Colors.secondary_color} !important;
          }
        }
      }
    }

    /* .social_media{
      padding-left: 4rem;
      display: flex;
      align-items: flex-end;
      background-color: red;
      
    } */
  }
`;
