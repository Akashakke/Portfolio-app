import React, {useState} from "react";
import "./Home.css";


function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src='https://cdn.iconscout.com/icon/free/png-256/web-development-5363139-4488928.png' alt="" width="50px" height="50px" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          </div>
          {/* Toogle Menu */}
          
          
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">Hello</h1>
              <h3 className="home__text pz__10">I’m Akash praveen</h3>
              <h3 className="home__text  pz__10">Front-end Developer.</h3>
              <h5 className="home__text pz__10">Currently studying full stack web development</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
