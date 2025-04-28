import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";
import { Constants } from "../utils";
import { IoCloseCircle } from "react-icons/io5";

const Destinations_model = () => {
  const WebData = useContext(DataContext);
  const { currentDestination, setCurrentDestination, setDes_Open } = WebData;

  return (
    <Section>
      <div className="model_wrapper">
        {/* Header Model */}
        <div className="model_header">
          <div className="header_title">
            <h1 style={{ color: Constants.Colors.secondary_color }}>
              {currentDestination?.title}
            </h1>
          </div>
          <div className="header_close_button">
            <button
              onClick={() => {
                setDes_Open(false);
                setCurrentDestination(null);
              }}
            >
              <IoCloseCircle />
            </button>
          </div>
        </div>
        {/* Destinations Body */}
        <div
          className="destinations_content_wrapper"
          //   style={{ backgroundImage: `url(${currentDestination?.img})` }}
        >
          <div className="overlay">
            <ul>
              {currentDestination?.discription.map((curr, i) => (
                <li key={i}>{curr}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  padding: 5rem 10rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }

  .model_wrapper {
    background-color: #fff;
    width: 100%;
    max-width: 700px;
    height: 100%;
    border-radius: 0.4rem;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;

    .model_header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header_title {
        h1 {
          font-size: 2rem;

          @media only screen and (max-width: 400px) {
            font-size: 1.6rem;
          }
        }
      }
      .header_close_button {
        button {
          font-size: 1.6rem;
          background-color: transparent;
          border: none;

          svg {
            font-size: 3rem;
            cursor: pointer;
            color: ${Constants.Colors.secondary_color};
            transition: ease-in-out 0.3s;
            &:hover {
              color: ${Constants.Colors.hover_color};
            }
          }
        }
      }
    }

    .destinations_content_wrapper {
      flex: 1;
      justify-self: stretch;
      overflow: auto;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 0.4rem;

      .overlay {
        width: 100%;
        height: auto;
        /* background-color: rgba(0, 0, 0, 0.532); */
        backdrop-filter: blur(5px);
        padding: 1rem;

        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          li {
            /* color: ${Constants.Colors.white_color}; */
            font-size: 1.6rem;
            line-height: 2.2rem;
          }
        }
      }
    }
  }
`;

export default Destinations_model;
