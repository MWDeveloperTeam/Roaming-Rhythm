import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Constants } from "../../utils";
import ResuableHeader from "../../components/ResuableHeader";
import {
  FaLocationDot,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
      phone: "",
      subject: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else {
      if (!/^\d*$/.test(formData.phone?.trim())) {
        newErrors.phone = "Phone number must contain only digits.";
        isValid = false;
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSending(true);
      try {
        await emailjs.send("service_8kjvgcc", "template_k5y8oud", formData, {
          publicKey: "mXLu8RBXdLxrYgSVz",
        });
        toast.success("Message Successfully Send 🎉🎉🎉");
        setSending(false);
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          subject: "",
        });
      } catch (error) {
        toast.error("Something went wrong 😢😢😢");
        setSending(false);
      }
    }
  };
  return (
    <Section>
      <div className="form_banner">
        <ResuableHeader title="Contact Us" />
      </div>

      <div className="contact_form_container">
        <div className="left_form_section_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12596.448357892084!2d74.75599835597708!3d33.86289937165809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1ed77b20f7079%3A0xea008d584d6f5394!2sCharar-i-Sharief%20191112!5e1!3m2!1sen!2sin!4v1743469400275!5m2!1sen!2sin"
            // width="600"
            // height="450"
            //   style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
        <div className="right_form_section_container">
          <div className="form_header">
            <h2>Contact Us</h2>
            <h1>Get In Touch</h1>
          </div>
          <div className="form_body">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  style={errors.name ? { border: "1px solid red" } : null}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  style={errors.email ? { border: "1px solid red" } : null}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone No. :</label>
                <input
                  type="tel"
                  maxLength="10"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone No."
                  style={errors.phone ? { border: "1px solid red" } : null}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  style={errors.subject ? { border: "1px solid red" } : null}
                />
                {errors.subject && <p className="error">{errors.subject}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={1}
                  style={errors.message ? { border: "1px solid red" } : null}
                />
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button type="submit">
                {!sending ? "Send Message" : <div class="loader"></div>}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="social_media_wrapper">
        <div className="social_media_header">
          <h1>Need Help??</h1>
        </div>
        <div className="social_media_icons_wrapper">
          <div className="media_icons">
            <div className="icon_wrapper">
              <div className="icons">
                <FaLocationDot />
              </div>
              <h2>Main Market Kremshore, Budgam, Kashmir, 191111</h2>
            </div>
            <div className="icon_wrapper">
              <div className="icons">
                <MdEmail />
              </div>
              <Link to={`mailto:${"info@roamingthythm.in"}`}>
                info@roamingrhythm.in
              </Link>
            </div>
            <div className="icon_wrapper">
              <div className="icons">
                <FaPhone />
              </div>
              <Link to={`tel:${9596089568}`}>+91-9596089568</Link>
            </div>
          </div>
          <div className="media_main_icons_wrapper">
            <h1>Follow us on Social Media</h1>
            <div className="wrapper_media_icons">
              <div className="media_icon">
                <FaFacebookF />
              </div>
              <div className="media_icon">
                <FaTwitter />
              </div>
              <div className="media_icon">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  .contact_form_container {
    display: flex;
    gap: 5rem;
    padding: 2rem 10rem;
    /* @media only screen and (max-width: 768px) {
    padding: 2rem;
  } */
    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 2rem;
    }
    .left_form_section_container {
      flex: 1;

      .map {
        min-width: 300px;
        width: 100%;
        height: 100%;
        border: none;
        @media only screen and (max-width: 768px) {
          height: 300px;
          min-width: 100%;
        }
      }
    }

    .right_form_section_container {
      flex: 1;

      .form_header {
        h2 {
          font-size: 2rem;
        }

        h1 {
          font-size: 5rem;
          color: ${Constants.Colors.secondary_color};
          @media only screen and (max-width: 840px) {
            font-size: 3.5rem;
          }
        }
      }

      /*  */
      .form_body {
        margin-top: 2rem;
        form {
          display: grid;
          /* flex-direction: column;  */
          grid-template-columns: repeat(2, minmax(180px, 1fr));
          gap: 1rem;
          @media only screen and (max-width: 1100px) {
            grid-template-columns: 1fr;
          }

          @media only screen and (max-width: 768px) {
            grid-template-columns: repeat(2, minmax(180px, 1fr));
          }

          @media only screen and (max-width: 500px) {
            grid-template-columns: 1fr;
          }

          .form-group {
            /* background-color: blue; */
            display: flex;
            flex-direction: column;

            gap: 1rem;

            label {
              font-size: 1.6rem;
            }
            input,
            textarea {
              padding: 2rem;
              outline: none;
              border: 1px solid ${Constants.Colors.primary_color};
              border-radius: 0.2rem;
              transition: ease-in-out 0.3s;

              @media only screen and (max-width: 768px) {
                max-width: 50rem;
              }

              &:focus {
                border-color: ${Constants.Colors.secondary_color};
              }
            }

            p {
              font-size: 1.2rem;
              color: red;
            }
          }
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: flex-end;
            padding: 2rem 1rem;
            margin-top: 2rem;
            background-color: ${Constants.Colors.secondary_color};
            border: none;
            /* max-width: 30rem;
            width: 100%; */
            border-radius: 0.4rem;
            font-size: 1.6rem;
            cursor: pointer;
            transition: ease-in-out 0.3s;
            &:hover {
              background-color: ${Constants.Colors.hover_color};
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

  .social_media_wrapper {
    /* display: flex;
    gap: 5rem; */
    padding: 2rem 10rem;

    @media only screen and (max-width: 768px) {
      /* flex-direction: column-reverse; */
      padding: 2rem;
    }

    .social_media_header {
      h1 {
        font-size: 4rem;
        padding-bottom: 2rem;
      }
    }

    .social_media_icons_wrapper {
      .media_icons {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .icon_wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;

          a {
            font-size: 2rem;
            color: ${Constants.Colors.black_color};
            transition: ease-in-out 0.3s;

            &:hover {
              color: ${Constants.Colors.hover_color};
            }
          }

          .icons {
            background-color: ${Constants.Colors.secondary_color};
            padding: 1rem;
            border-radius: 0.4rem;
            cursor: pointer;
            transition: ease-in-out 0.3s;

            &:hover {
              background-color: ${Constants.Colors.hover_color};
            }

            svg {
              font-size: 3rem;
              color: ${Constants.Colors.primary_color};

              @media only screen and (max-width: 550px) {
                font-size: 2rem;
              }
            }
          }
          h2 {
            font-size: 2rem;
            @media only screen and (max-width: 550px) {
              font-size: 1.6rem;
            }
          }
        }
      }

      .media_main_icons_wrapper {
        margin-top: 3rem;
        h1 {
          font-size: 3rem;
          padding-bottom: 2rem;

          @media only screen and (max-width: 400px) {
            font-size: 2rem;
          }
        }

        .wrapper_media_icons {
          display: flex;
          gap: 1rem;

          .media_icon {
            background-color: ${Constants.Colors.secondary_color};
            padding: 1rem;
            border-radius: 0.4rem;
            cursor: pointer;
            transition: ease-in-out 0.3s;

            &:hover {
              background-color: ${Constants.Colors.hover_color};
            }

            svg {
              font-size: 3rem;
              color: ${Constants.Colors.primary_color};

              @media only screen and (max-width: 550px) {
                font-size: 2rem;
              }
            }
          }
        }
      }
    }
  }
`;

export default Contact;
