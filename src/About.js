import React from "react";
import "./About.css";
import mern from './img/mern-stack-developer.gif'


function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img
              src={mern}
              alt=""
              className="about__img"
            />
          </div>
  
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text ">
                I'm a self taught web developer.I take into consideration the user experience while
                writing reusable and efficient code.I passionately combine good
                design ,technology and innovation in all my projects ,which i
                like to accompany from the first idea to release .Currently Im
                focused on the backend development.
              </p>
              <p className="about__text "></p>
              <p className="about__text "></p>
              <div>
                <a href="https://drive.google.com/file/d/1KHdVhNN-3g3SFEP8rMJ03pt6Au-nH2Gj/view?usp=sharing" target="_blank">
                  <button type="button" class="btn btn-outline-dark">Download Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
