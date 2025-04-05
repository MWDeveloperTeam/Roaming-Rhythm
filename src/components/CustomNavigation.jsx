import React from "react";
import styled from "styled-components";

const CustomNavigation = ({ swiperRef }) => {
  console.log(swiperRef);

  return (
    <Custom>
      <button
        onClick={() => {
          // swiper.slideNext()
          //   console.log(swiper);
        }}
        className="next-navigation-el"
      >
        Next
      </button>
      <button>Prev</button>
    </Custom>
  );
};

const Custom = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  background-color: red;
`;

export default CustomNavigation;
