import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Loader_wrapper>
      <div className="loader"></div>
    </Loader_wrapper>
  );
};

const Loader_wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  place-content: center;
  .loader {
    width: 100px;
    aspect-ratio: 1;
    padding: 10px;
    box-sizing: border-box;
    display: grid;
    background: #fff;
    /* filter: blur(3px) contrast(7) hue-rotate(290deg); */
    mix-blend-mode: darken;
  }
  .loader:before {
    content: "";
    margin: auto;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #00b7ff;
    background: currentColor;
    box-shadow: -30px 0, 30px 0, 0 30px, 0 -30px;
    animation: l6 1s infinite alternate;
  }
  @keyframes l6 {
    90%,
    100% {
      box-shadow: -10px 0, 10px 0, 0 10px, 0 -10px;
      transform: rotate(180deg);
    }
  }
`;

export default Loader;
