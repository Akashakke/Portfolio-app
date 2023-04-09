import React from "react";
import "./Service.css";


function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading" >Skills</h1>
        
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src="images/html.png" 
                alt="" width="80px" height="50px" /> 
              </div>
              <div className="service__meta">
                <h1 className="service__text">HTML</h1>
                
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src="https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png" 
                alt="" width="80px" height="50px" />  
                
              </div>
              <div className="service__meta">
                <h1 className="service__text">CSS</h1>
                
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon" style={{padding: "0px 0px 0px 10px"}}>
              <img src="https://ultimatecourses.com/assets/category/javascript-58bb09245e2abeaf56f7db48e86fa4454c2f316a4c6c71aadaa2bdf3b206ab95.svg" alt="Girl in a jacket"
               width="80px" height="50px"/>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Javascript</h1>
                
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer" >
              <div className="icon" style={{padding: "0px 10px 0px 10px"}}>
              <img src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"
                 height="50px"
                 width="60px" 
                 alt=''/>
                 </div>
              <div className="service__meta">
                <h1 className="service__text">React</h1>
                
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer" >
              <div className="icon" style={{padding: "0px 0px 0px 8px"}}>
              <img src="https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png" alt="Girl in a jacket" width="60px" height="50px"/>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Python</h1>
                
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon" style={{padding: "0px 0px 0px 25px"}}>
              <img src="https://cdn.iconscout.com/icon/free/png-256/bootstrap-226077.png" alt="Girl in a jacket" width="50px" height="50px"/>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Bootstrap</h1>
                
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="service__box pointer" >
              <div className="icon">
              <img src="https://cdn.iconscout.com/icon/free/png-256/git-225996.png" alt="Girl in a jacket" width="60px" height="50px"/>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Git</h1>
                
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer" >
              <div className="icon" style={{filter: "brightness(1.2)"}}>
              <img src="https://cdn.iconscout.com/icon/free/png-256/mysql-3521596-2945040.png" alt="Girl in a jacket" width="80px" height="50px"/>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mysql</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon" style={{padding: "0px 0px 0px 15px"}}>
              <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png" alt="Girl in a jacket" width="60px" height="50px"/>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mongodb</h1>
                
                
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon" >
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--mR9UUbbF--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p7nv6cuvntdz1y1ogjc0.jpg" alt="Girl in a jacket" width="80px" height="50px"/>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Node js</h1>
                
                
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default Service;
