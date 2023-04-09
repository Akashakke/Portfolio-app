import React from "react";
import "./Home.css";
import { TypeAnimation } from 'react-type-animation';


function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src='images/6674627.png' alt="" width="50px" height="50px" />
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

              <div className="typing">
      <TypeAnimation
      sequence={[
        'Frontend developer', // Types 'One'
        2000, // Waits 2s
        'MERN stack developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Full stack developer', // Types 'Three' without deleting 'Two'
        5000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2.5em',fontWeight:'bold' }}
    />

    

</div>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
