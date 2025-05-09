import React from "react";
import styled from "styled-components";
import svg1 from "../assets/images/1.svg";
import svg2 from "../assets/images/2.svg";
import svg3 from "../assets/images/3.svg";
import { Constants } from "../utils";

const Guarantee = () => {
  return (
    <Section>
      <div className="card">
        <img src={svg1} alt="icon" />
        <h2>Best Price Guarantee</h2>
        <p>
          Finding the perfect trip at the perfect price is our priority.
          {/* With
          our Best Price Guarantee, you can book with us today without
          hesitation. */}
        </p>
      </div>
      <div className="card">
        <img src={svg2} alt="icon" />
        <h2>Easy & Quick Booking</h2>
        <p>
          Explore the Kashmir with ease! Find and book your perfect trip quickly
          and effortlessly.
        </p>
      </div>
      <div className="card">
        <img src={svg3} alt="icon" />
        <h2>Customer Care 24/7</h2>
        <p>
          Our dedicated customer care team is available 24/7 to ensure your
          travel plans are always smooth.
        </p>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    padding: 10rem 2rem;
  }
  .card {
    padding: 3rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: ease-in-out 0.3s;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    }

    h2 {
      font-size: 2rem;
      font-weight: 500;
    }

    p {
      font-size: 1.4rem;
      text-align: center;
      color: ${Constants.Colors.text_color_main};
      line-height: 1.9rem;
      font-weight: 300;
    }
  }
`;

export default Guarantee;
