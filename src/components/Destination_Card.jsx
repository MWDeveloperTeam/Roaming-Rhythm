import React, { useContext } from "react";
import styled from "styled-components";
import { Constants } from "../utils";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Destination_Card = ({ des }) => {
  const WebData = useContext(DataContext);
  const { setDes_Open, setCurrentDestination } = WebData;
  return (
    <Card>
      <img src={des.img} alt="Image" loading="lazy" />
      <div className="card_curtain">
        <h3>{des.title}</h3>
        <Link
          onClick={() => {
            setDes_Open(true);
            setCurrentDestination(des);
          }}
        >
          See Details
        </Link>
      </div>
    </Card>
  );
};

const Card = styled.div`
  /* width: 400px; */
  /* background-color: blue; */
  height: auto;
  border-radius: 0.4rem;
  position: relative;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card_curtain {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1) 60%
    );

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    h3 {
      color: ${Constants.Colors.white_color};
      font-size: 1.8rem;
    }

    a {
      transform: translateY(150%);
      color: ${Constants.Colors.white_color};
      font-size: 1.5rem;
      padding: 1.4rem 1.6rem;
      background-color: ${Constants.Colors.secondary_color};
      border-radius: 5rem;
      transition: ease-in-out 0.3s;

      @media only screen and (max-width: 768px) {
        transform: translateY(0);
      }

      @media only screen and (max-width: 400px) {
        padding: 1rem 1.2rem;
      }
      &:hover {
        background-color: ${Constants.Colors.primary_color};
      }
    }

    &:hover a {
      transform: translateY(0);
    }
  }
`;

export default Destination_Card;
