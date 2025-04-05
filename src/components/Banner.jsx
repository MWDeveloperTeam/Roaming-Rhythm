import React, { useContext, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import BannerImage from "../assets/images/bg.png";
import { Constants } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cards";
import toast from "react-hot-toast";
import { DataContext } from "../context/DataContext";

const Banner = () => {
  const webData = useContext(DataContext);
  const { banner_data } = webData.All_Data;

  const [sending, setSending] = useState(false);
  const [userQuery, setUserQuery] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
  });

  const handleChange = (e) => {
    setUserQuery({ ...userQuery, [e.target.name]: e.target.value });
  };
  const small_title = ["Mountains", "Plains", "Lakes"];

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_8kjvgcc", "template_jd3p6vu", userQuery, {
        publicKey: "mXLu8RBXdLxrYgSVz",
      });
      toast.success("Message Successfully Send 🎉🎉🎉");
      setSending(false);
      setUserQuery({ name: "", email: "", phone: "", destination: "" });
    } catch (error) {
      toast.error("Something went wrong 😢😢😢");
      setSending(false);
    }
  };
  return (
    <Section>
      <div
        className="banner_curtain"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="spacer_wrapper"></div>
        <div className="banner_content_wrapper">
          <div className="banner_small_title">
            {small_title.map((title, index) => (
              <p key={index}>{title}</p>
            ))}
          </div>
          <div className="banner_title_wrapper">
            <h1>
              Spend Your Vacation
              <br /> With Our Activities
            </h1>
          </div>
          <div className="banner_trending_wrapper">
            <p>Most Popular</p>
            <div className="banner_trending_card_wrapper">
              <Swiper
                style={{ width: "240px", height: "260px" }}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                // loop={true}
                // modules={[Pagination, Autoplay]}
              >
                {banner_data.banner_slider_images.map((ele, i) => (
                  <SwiperSlide
                    key={i}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className="banner_card" key={i}>
                      <img src={ele.img} alt="image" loading="lazy" />
                      <p className="banner_card_title">{ele.title}</p>
                      <p>{ele.people}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="banner_contact_form_wrapper">
            <form onSubmit={submitHandler}>
              <div className="input_wrapper">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  required
                  value={userQuery.name}
                  onChange={handleChange}
                  name="name"
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="name">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  required
                  maxLength={10}
                  onChange={handleChange}
                  name="phone"
                  value={userQuery.phone}
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  onChange={handleChange}
                  value={userQuery.email}
                  name="email"
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="name">Destination</label>
                <input
                  type="text"
                  placeholder="Enter Destination"
                  required
                  onChange={handleChange}
                  value={userQuery.destination}
                  name="destination"
                />
              </div>
              <div className="input_wrapper">
                <button type="submit">
                  {!sending ? "Submit" : <div class="loader"></div>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  /* min-height: 68rem; */
  height: auto;
  position: relative;
  /* background-color: red; */
  /* @media only screen and (max-width: 990px) {
    height: auto;
  } */
  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }

  .banner_curtain {
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.2); */
    /* position: absolute; */
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: center; */
    top: 0;
    left: 0;
    /* @media only screen and (max-width: 990px) {
      height: auto;
    } */

    .spacer_wrapper {
      height: 80px;
    }

    .banner_content_wrapper {
      padding: 2rem 10rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media only screen and (max-width: 768px) {
        padding: 2rem;
      }

      .banner_small_title {
        display: flex;
        /* gap: 2rem; */
        p {
          font-size: 1.6rem;
          color: ${Constants.Colors.white_color};
          border-right: 1px solid ${Constants.Colors.white_color};
          padding: 0 1rem;

          &:nth-child(1) {
            padding-left: 0;
          }

          &:last-child {
            border: none;
          }
        }
      }

      .banner_title_wrapper {
        h1 {
          font-size: 5rem;
          font-weight: 900;
          color: ${Constants.Colors.white_color};

          @media only screen and (max-width: 768px) {
            font-size: 4rem;
          }

          @media only screen and (max-width: 420px) {
            font-size: 2.8rem;
          }
        }
      }

      .banner_trending_wrapper {
        /* max-width: 600px; */
        width: max-content;
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
        gap: 1rem;
        & > p {
          font-size: 1.8rem;
          color: ${Constants.Colors.white_color};
        }
        .banner_trending_card_wrapper {
          display: flex;
          gap: 1rem;
          .banner_card {
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            /* width: 180px; */
            background-color: rgba(255, 255, 255);
            padding: 0.8rem;
            border-radius: 0.4rem;
            box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

            img {
              height: 75%;
              border-radius: 0.4rem;
              object-fit: cover;
            }

            .banner_card_title {
              font-size: 1.6rem;
              font-weight: 700;
            }

            p {
              font-size: 1.4rem;
              color: ${Constants.Colors.text_color_main};
            }
          }
        }
      }

      .banner_contact_form_wrapper {
        /* background-color: rgba(255, 255, 255, 0.1); */
        background-color: ${Constants.Colors.white_color};
        backdrop-filter: blur(1rem);
        padding: 2rem;
        width: fit-content;
        margin: 0 auto;
        border-radius: 0.4rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
        form {
          display: grid;
          grid-template-columns: repeat(5, minmax(100px, 1fr));
          gap: 1rem;

          @media only screen and (max-width: 990px) {
            grid-template-columns: 1fr 1fr 1fr;
          }

          @media only screen and (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
          }

          @media only screen and (max-width: 500px) {
            grid-template-columns: 1fr;
          }

          .input_wrapper {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;

            label {
              font-size: 1.6rem;
              color: ${Constants.Colors.primary_color};
            }

            input {
              width: 100%;
              padding: 1.6rem;
              border: none;
              outline: none;
              border-radius: 0.4rem;
              /* background-color: ${Constants.Colors.white_dim_color}; */
              background-color: #f7f7ff;
            }

            button {
              font-size: 1.6rem;
              padding: 1.5rem 4rem;
              background-color: ${Constants.Colors.secondary_color};
              border: none;
              color: ${Constants.Colors.white_color};
              cursor: pointer;
              border-radius: 11rem;
              transition: ease-in-out 0.3s;
              display: flex;
              justify-content: center;
              align-items: center;

              &:hover {
                background-color: ${Constants.Colors.hover_color};
                color: ${Constants.Colors.primary_color};
              }
            }

            &:last-child {
              align-self: flex-end;
            }

            .loader {
              width: 15px;
              aspect-ratio: 1;
              border-radius: 50%;
              border: 4px solid;
              border-color: #000 #0000;
              animation: l1 1s infinite;
            }
            @keyframes l1 {
              to {
                transform: rotate(0.5turn);
              }
            }
          }
        }
      }
    }
  }
`;

export default Banner;
