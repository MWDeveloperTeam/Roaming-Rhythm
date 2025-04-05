import React from "react";
import styled from "styled-components";
import { Constants } from "../utils";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { URL } from "../resuable/URL";

const Footer = () => {
  return (
    <Section>
      <div className="top_wrapper">
        <div className="about_us_footer_wrapper">
          <h2>About us</h2>
          <p>
            We are providing special discounted packages for Kashmir Holiday
            Package, Houseboat Package, Honeymoon Package, Family Package,
            Vacation Package etc..
          </p>
        </div>
        <div className="contact_info">
          <h2>Contact Info</h2>
          <div className="contact">
            <FaPhoneAlt />
            <Link to={`tel:${9596089568}`}>+91-9596089568</Link>
          </div>
          <div className="email">
            <MdEmail />
            <Link to={`mailto:${"info@roamingthythm.in"}`}>
              info@roamingthythm.in
            </Link>
          </div>
          <div className="location">
            <MdLocationOn />
            <span>Main Market Kremshore, Budgam, Kashmir, 191111</span>
          </div>
        </div>
        <div className="quick_links_wrapper">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to={URL.Contact}>Contact Us</Link>
            </li>
            <li>
              <Link to={URL.Package}>Packages</Link>
            </li>
            <li>
              <Link to={URL.Destinations}>Destinations</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom_footer_container">
        <div className="copyright_wrapper">
          <p>Copyright © {new Date().getFullYear()} Roaming Rhythm</p>
        </div>
        <div className="made_wrapper">
          <Link to="https://compix.in/">Compix Multimedia</Link>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.footer`
  background-color: ${Constants.Colors.primary_color};

  .top_wrapper {
    padding: 2rem 10rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    color: ${Constants.Colors.white_dim_color};
    font-size: 1.4rem;
    /* background-color: red; */
    gap: 2rem;

    @media only screen and (max-width: 990px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 768px) {
      padding: 2rem;
      /* grid-template-columns: 1fr; */
    }
    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    .about_us_footer_wrapper,
    .contact_info,
    .quick_links_wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      /* background-color: blue; */

      h2 {
        width: max-content;
        position: relative;
        color: ${Constants.Colors.secondary_color};
        &::before {
          content: "";
          width: 60%;
          height: 2px;
          background-color: ${Constants.Colors.hover_color};
          bottom: 0;
          margin-bottom: -0.6rem;
          position: absolute;
        }
      }
    }

    .about_us_footer_wrapper {
      p {
        line-height: 2.5rem;
      }
    }

    .contact_info {
      svg {
        display: block;
        font-size: 2rem;
      }
      .contact,
      .email,
      .location {
        display: flex;
        gap: 1rem;
        /* align-items: center; */
      }
      a {
        display: block;
        color: ${Constants.Colors.white_color};
        transition: ease-in-out 0.3s;

        &:hover {
          color: ${Constants.Colors.hover_color};
          letter-spacing: 1px;
        }
      }

      .location {
        span {
          line-height: 3rem;
        }
      }
    }

    .quick_links_wrapper {
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        li {
          a {
            color: #fff;
            padding-bottom: 0.3rem;
            transition: ease-in-out 0.3s;
            display: block;

            &:hover {
              color: ${Constants.Colors.hover_color};
            }
          }
        }
      }
    }
  }

  .bottom_footer_container {
    padding: 2rem 10rem;
    background-color: ${Constants.Colors.primary_color};
    color: #fff;
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;

    @media only screen and (max-width: 768px) {
      padding: 2rem;
    }

    @media only screen and (max-width: 450px) {
      font-size: 1rem;
    }

    .made_wrapper {
      a {
        color: #fff;
      }
    }
  }
`;

export default Footer;
