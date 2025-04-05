import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";
import { Constants } from "../utils";
import { IoCloseCircle } from "react-icons/io5";
import { FaClock, FaRupeeSign } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const Model = () => {
  const [activeModelTab, setActiveModelTab] = useState("discription");
  const webData = useContext(DataContext);
  const { currentPackage, setCurrentPackage, setOpen } = webData;

  return (
    <Section>
      <div className="model_wrapper">
        <div className="model_header">
          <div className="header_title">
            <h1>{currentPackage.title}</h1>
          </div>
          <div className="header_close_button">
            <button
              onClick={() => {
                setOpen(false);
                setCurrentPackage(null);
              }}
            >
              <IoCloseCircle />
            </button>
          </div>
        </div>

        {/*  */}

        <div className="pkg_model_body_wrapper">
          <div className="model_left_wrapper">
            <div className="model_duration">
              <FaClock />
              <h3>{currentPackage.duration}</h3>
            </div>
            <div className="model_family">
              <MdFamilyRestroom />
              <h3>{currentPackage.family}</h3>
            </div>
            <div className="model_price">
              <FaRupeeSign />
              <h1>{currentPackage.price}</h1>
            </div>
          </div>
          <div className="model_right_wrapper">
            <div className="model_tabs">
              <ul>
                {["discription", "itenerary"].map((ele, i) => (
                  <li
                    key={i}
                    onClick={() => setActiveModelTab(ele)}
                    style={
                      activeModelTab === ele
                        ? { backgroundColor: Constants.Colors.secondary_color }
                        : null
                    }
                  >
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
            <div className="model_content_wrapper">
              <div className="model_content">
                {activeModelTab === "discription" ? (
                  <p>{currentPackage?.description}</p>
                ) : (
                  <ul>
                    {currentPackage?.itenerary?.map((ele, i) => (
                      <li key={i}>
                        <h2>{ele.label}</h2>
                        <h3>
                          {ele?.meal !== "" ? "Meal : " : null} {ele?.meal}
                        </h3>
                        <p>{ele?.activities}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
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

    .pkg_model_body_wrapper {
      flex: 1;
      /* background-color: #f1f1f1; */
      justify-self: stretch;
      overflow: auto;

      .model_left_wrapper {
        display: flex;
        justify-content: space-between;
        background-color: #f5f5f5;
        align-items: center;
        padding: 1rem;

        @media only screen and (max-width: 500px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 2rem;
        }

        .model_duration,
        .model_family,
        .model_price {
          display: flex !important;
          font-size: 1.6rem;
          align-items: center;
          gap: 0.6rem;
          span {
            display: block;
          }
        }

        .model_price {
          font-weight: 900;
          color: ${Constants.Colors.secondary_color};
        }
      }

      .model_right_wrapper {
        .model_tabs {
          padding: 1rem 0;
          ul {
            display: flex;
            gap: 1rem;
            list-style: none;
            font-size: 1.6rem;

            li {
              background-color: #f5f5f5;
              padding: 1rem;
              border-radius: 0.4rem;
              cursor: pointer;
              text-transform: uppercase;
            }
          }
        }

        .model_content_wrapper {
          .model_content {
            padding: 0 1rem;
            p {
              font-size: 1.4rem;
              line-height: 2.2rem;
              color: #444444;
              text-align: justify;
              hyphens: auto;
            }

            ul {
              list-style: none;
              display: flex;
              flex-direction: column;
              gap: 2rem;
              li {
                display: flex;
                flex-direction: column;
                gap: 0.6rem;
                font-size: 1.4rem;
                h2 {
                  color: ${Constants.Colors.secondary_color};

                  @media only screen and (max-width: 400px) {
                    font-size: 1.8rem;
                  }
                }
                p {
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Model;
