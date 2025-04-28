import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Constants } from "../../utils/index";
import { Menu, SideMenu } from "../index";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useWindowSize, useWindowScroll } from "../../resuable/useReize";
import { DataContext } from "../../context/DataContext";
import { URL } from "../../resuable/URL";

const Header = () => {
  const webData = useContext(DataContext);
  const { setShowSideMenu, showSideMenu } = webData;

  const phoneNumber = "+919596089568";
  const message = "Hii";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const { width } = useWindowSize();
  const { scrollY } = useWindowScroll();

  return (
    <Section
      style={
        scrollY > 200
          ? {
              backgroundColor: Constants.Colors.white_color,
              boxShadow: "2px 2px 10px #00000023",
            }
          : { backgroundColor: "rgba(255, 255, 255, 0.1)" }
      }
    >
      <div className="logo_wrapper">
        {width <= 768 && (
          <FaBarsStaggered
            className="side_bar_open_icon"
            color={scrollY > 200 ? Constants.Colors.secondary_color : null}
            onClick={() => setShowSideMenu(!showSideMenu)}
          />
        )}
        <Link to={URL.Home}>
          <img src={webData.All_Data.logo} alt="Logo" />
        </Link>
      </div>
      <div className="menu_container">
        {width > 768 ? <Menu /> : null}
        <Link
          className="book_now"
          to={whatsappUrl}
          target="_blank"
          style={
            scrollY > 200
              ? { backgroundColor: Constants.Colors.secondary_color }
              : { backgroundColor: Constants.Colors.primary_color }
          }
        >
          Book Now
        </Link>
      </div>
      <SideMenu />
    </Section>
  );
};

const Section = styled.section`
  position: fixed;
  max-width: 192rem;
  width: 100%;
  height: 80px;
  transition: ease-in-out 1s;
  display: flex;
  align-items: center;
  padding: 0 10rem;
  backdrop-filter: blur(1rem);
  justify-content: space-between;
  margin: auto;
  z-index: 3;

  @media only screen and (max-width: 980px) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: 768px) {
    height: 60px;
  }

  .logo_wrapper {
    display: flex;
    gap: 2rem;
    align-items: center;
    svg {
      color: ${Constants.Colors.white_color};
      font-size: 2.5rem;
      transition: ease-in-out 0.3s;

      &:hover {
        color: ${Constants.Colors.hover_color} !important;
      }
    }
    a {
      img {
        width: 14rem;
        filter: drop-shadow(5px 5px 10px rgba(255, 255, 255));
        transition: ease-in-out 0.3s;
        &:hover {
          opacity: 0.6;
        }

        @media only screen and (max-width: 768px) {
          width: 8rem;
        }
      }
    }
  }

  .menu_container {
    display: flex;
    align-items: center;
    gap: ${Constants.Spacing.large};

    .book_now {
      padding: 12px 20px;
      cursor: pointer;
      background-color: ${Constants.Colors.primary_color};
      border: none;
      border-radius: 4px;
      transition: ease-in-out 0.3s;
      /* font-weight: 5 00; */
      font-size: 1.6rem;
      color: ${Constants.Colors.white_color};

      &:hover {
        background-color: ${Constants.Colors.hover_color} !important;
      }

      @media only screen and (max-width: 460px) {
        padding: 10px 20px;
      }
      @media only screen and (max-width: 370px) {
        padding: 8px;
        font-size: 1.2rem;
      }
    }
  }
`;

export default Header;
