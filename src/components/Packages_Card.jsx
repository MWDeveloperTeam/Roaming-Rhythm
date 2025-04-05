import React, { useContext } from "react";
import styled from "styled-components";
import { Constants } from "../utils";
import { FaClock, FaRupeeSign } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Packages_Card = ({ pkg }) => {
  const phoneNumber = "+919596089568";
  const message = `  Package Name : ${pkg?.title}, Duration: ${pkg?.duration}, Price : ${pkg?.price}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const webData = useContext(DataContext);
  const { handleToggle, setCurrentPackage } = webData;
  const clickHandler = (e) => {
    handleToggle(e);
    setCurrentPackage(pkg);
  };

  return (
    <Section onClick={(e) => clickHandler(e)}>
      <div className="img_wrapper">
        <img src={pkg?.img} alt="image" loading="lazy" />
      </div>
      <h1>{pkg?.title}</h1>
      <p>{pkg?.description.slice(0, 100)}...</p>
      <div className="package_detial_wrapper">
        <div className="left_section">
          <p className="details_common">
            <FaClock />
            <span>{pkg?.duration}</span>
          </p>
          <p className="details_common">
            <MdFamilyRestroom />
            <span>{pkg?.family}</span>
          </p>
          <h2 className="details_common">
            <FaRupeeSign /> <span>{pkg?.price} </span>
            <span style={{ fontSize: "1.2rem", fontWeight: 400 }}>
              / Per Person
            </span>
          </h2>
        </div>
        <div className="right_section">
          <Link to={whatsappUrl} target="_blank" className="book_now_button">
            Book Now
          </Link>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  transition: ease-in-out 0.3s;

  .img_wrapper {
    overflow: hidden;
    border-radius: 1.6rem;
    img {
      width: 100%;
      height: auto;
      border-radius: 1.6rem;
      transition: ease-in-out 0.3s;
    }
  }

  h1 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.4rem;
  }

  .package_detial_wrapper {
    display: flex;
    margin-top: 1rem;

    .left_section {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .details_common {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        align-items: center;
      }
      h2 {
        font-weight: 900;
        font-size: 2rem;
      }
    }

    .right_section {
      flex: 1;
      display: flex;
      /* background-color: red; */
      justify-content: flex-end;
      align-items: flex-end;

      a {
        color: black;
        font-size: 1.4rem;
        background-color: ${Constants.Colors.hover_color};
        border-radius: 50px;
        padding: 0.8rem 1.4rem;
        transition: ease-in-out 0.3s;

        &:hover {
          background-color: ${Constants.Colors.secondary_color};
        }

        @media only screen and (max-width: 420px) {
          /* padding: 1rem 1.6rem; */
          font-size: 1.2rem;
        }
      }
    }
  }

  &:hover {
    transform: translateY(-1rem);
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

export default Packages_Card;
