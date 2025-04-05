import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Constants } from "../utils";
import Packages_Card from "./Packages_Card";
import { DataContext } from "../context/DataContext";
import { URL } from "../resuable/URL";
import Model from "./Model";

const Popular_Packages = () => {
  const webData = useContext(DataContext);
  const { open, currentPackage } = webData;
  const { packages } = webData.All_Data;
  const pk01 = packages[0];
  const pk02 = packages[1];
  const pk03 = packages[4];
  const pk04 = packages[5];
  const pop_pkgs = [pk01, pk02, pk03, pk04];

  return (
    <Section>
      <div className="popular_packages_header_wrapper">
        <div className="title_wrapper">
          <p>EXPLORE GREAT PLACES</p>
          <h1>POPULAR PACKAGES</h1>
        </div>
        <div className="view_more_wrapper">
          <Link to={URL.Package}>
            <FaArrowTrendUp />
            <span>View More</span>
          </Link>
        </div>
      </div>
      <div className="popular_packages_card_wrapper">
        {pop_pkgs.map((pkg, i) => (
          <Packages_Card key={i} pkg={pkg} />
        ))}
      </div>
      {open && <Model />}
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 10rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }

  .popular_packages_header_wrapper {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    @media only screen and (max-width: 650px) {
      flex-direction: column;
      align-items: center;
    }
    .title_wrapper {
      p {
        font-size: 1.6rem;
        color: ${Constants.Colors.primary_color};
        /* background-color: blue; */
        width: max-content;
        position: relative;
        padding-left: 7rem;

        @media only screen and (max-width: 420px) {
          font-size: 1.4rem;
        }
        &::before {
          content: "";
          position: absolute;
          width: 6rem;
          height: 2px;
          background-color: ${Constants.Colors.secondary_color};
          top: 45%;
          left: 0rem;
        }
      }

      h1 {
        font-size: 4rem;
        font-weight: 900;
        color: ${Constants.Colors.secondary_color};

        @media only screen and (max-width: 850px) {
          font-size: 3.4rem;
        }

        @media only screen and (max-width: 420px) {
          font-size: 2.6rem;
        }
      }
    }

    .view_more_wrapper {
      /* background-color: red; */
      align-self: flex-end;
      height: 100%;
      @media only screen and (max-width: 650px) {
        align-self: inherit;
      }

      a {
        color: ${Constants.Colors.primary_color};
        padding: 1.6rem 2rem;
        background-color: ${Constants.Colors.hover_color};
        display: flex;
        font-size: 1.6rem;
        align-items: center;
        gap: 1rem;
        border-radius: 0.4rem;

        @media only screen and (max-width: 850px) {
          padding: 1.4rem 1.6rem;
          font-size: 1.4;
        }
      }
    }
  }

  /*  */

  .popular_packages_card_wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 4rem;
    @media only screen and (max-width: 1340px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default Popular_Packages;
