import React from "react";
import "./Contact.css";
import contactImg from "./img/Me.jpg";
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact me</h1>
              <p className="hire__text black">Feel free to connect with me </p>
              <p className="hire__text black">
                {" "}
                <a href="tel:9047346659">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/phone-173-103873.png"
                    width="40px"
                    height="40px"
                  />
                </a>{" "}
                <a href="mailto:rakashpraveen@karunya.edu.in">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png"
                    width="40px"
                    height="40px"
                  />
                </a>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img
            src={contactImg}
            alt=""
            className="contact__img"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
