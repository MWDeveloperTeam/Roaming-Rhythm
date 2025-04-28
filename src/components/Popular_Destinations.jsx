import React, { useContext } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Constants } from "../utils";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { DataContext } from "../context/DataContext";
import { URL } from "../resuable/URL";

const Popular_Destinations = () => {
  const webData = useContext(DataContext);
  const { destinations } = webData.All_Data;
  const kashmir_destinations = destinations.slice(0, 3);
  const ladakh_destinations = destinations.slice(9, 12);
  const new_array = [...kashmir_destinations, ...ladakh_destinations];

  return (
    <Section>
      <div className="popular_packages_header_wrapper">
        <div className="title_wrapper">
          <p>POPULAR DESTINATION</p>
          <h1>TOP DESTINATION</h1>
        </div>
        <div className="view_more_wrapper">
          <Link to={URL.Destinations}>
            <FaArrowTrendUp />
            <span>View More</span>
          </Link>
        </div>
      </div>
      <div className="popular_packages_card_wrapper">
        <div className="main_container">
          <Swiper
            modules={[Pagination, Navigation, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={2}
            speed={600}
            preventClicks={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 350,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            loop={true}
            className="swiper_main"
            spaceBetween={10}
          >
            {new_array.map((ele, i) => (
              <SwiperSlide className="slide_my" key={i}>
                <img src={ele.img} alt="image" loading="lazy" />
                <div className="slide_curtain">
                  <h1>{ele.title}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  /* background-color: red; */
  padding: 10rem;

  @media only screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }

  .popular_packages_header_wrapper {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    /* background-color: red; */
    @media only screen and (max-width: 650px) {
      flex-direction: column;
      /* align-items: ; */
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
        display: flex;
        font-size: 1.6rem;
        align-items: center;
        gap: 1rem;
        border-radius: 0.4rem;
        transition: ease-in-out 0.3s;
        padding: 1.2rem 1.6rem;
        width: max-content;
        color: ${Constants.Colors.white_color};
        background-color: ${Constants.Colors.secondary_color};

        &:hover {
          background-color: ${Constants.Colors.hover_color};
        }

        @media only screen and (max-width: 850px) {
          padding: 1.4rem 1.6rem;
          font-size: 1.4;
        }
      }
    }
  }

  /*  */

  .popular_packages_card_wrapper {
    .main_container {
      margin-top: 4rem;
      width: 100%;
      /* background-color: #654848; */
      height: 400px !important;
      /* overflow: visible; */
      @media only screen and (max-width: 768px) {
        height: 300px !important;
      }
      .swiper_main {
        height: 100%;
        /* background-color: aliceblue; */

        .swiper-pagination {
          /* background-color: red; */
          /* margin-top: 50px; */
          /* bottom: -15px; */
          /* z-index: 100; */

          .swiper-pagination-bullet {
            /* width: 40px;
          height: 40px; */
          }
        }
        .slide_my {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          width: 700px;
          /* background-color: red; */
          /* padding: 1rem; */

          @media only screen and (max-width: 1375px) {
            width: 600px;
          }
          @media only screen and (max-width: 1165px) {
            width: 500px;
          }

          @media only screen and (max-width: 960px) {
            width: 400px;
          }

          @media only screen and (max-width: 620px) {
            width: 350px;
          }

          @media only screen and (max-width: 520px) {
            width: 320px;
          }

          @media only screen and (max-width: 455px) {
            width: 280px;
          }

          @media only screen and (max-width: 350px) {
            width: 250px;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
            filter: grayscale(100%) blur(3px);
            transition: ease-in-out 0.5s;
          }

          .slide_curtain {
            width: 100%;
            height: 100%;
            /* background-color: rgba(0, 0, 0, 0.359); */
            position: absolute;
            border-radius: inherit;
            /* display: none; */

            overflow: hidden;

            h1 {
              padding: 1rem 2rem;
              background-color: ${Constants.Colors.secondary_color};
              color: ${Constants.Colors.white_color};
              border-radius: 0 50px 50px 0;
              position: absolute;
              bottom: 3rem;
              left: -100%;
              overflow: hidden;
              /* width: 0px; */
              transition: ease-in 0.5s;
              font-size: 1.6rem;
            }
          }
        }

        /* Active Slide */
        .swiper-slide-active {
          img {
            filter: grayscale(0%);
          }

          .slide_curtain {
            h1 {
              left: 0;
              /* padding: 1rem 2rem; */
              /* width: max-content; */
            }
          }
        }
      }
    }
  }
`;

export default Popular_Destinations;
