import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiWhatsappFill } from "react-icons/ri";
import { Constants } from "../utils";

const Whatsapp = () => {
  const phoneNumber = "+919596089568";
  const message = "Hii";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <Section>
      <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <RiWhatsappFill />
      </Link>
    </Section>
  );
};

const Section = styled.div`
  z-index: 1;
  width: 6rem;
  height: 6rem;
  background-color: #25d366;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  a {
    svg {
      font-size: 3rem;
      color: ${Constants.Colors.white_color};
    }
  }
`;

export default Whatsapp;
