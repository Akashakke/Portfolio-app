import React from "react";
import "./Project.css";


function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Projects</h1>
        
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://www.warehouseanywhere.com/resources/history-future-and-trends-of-e-commerce/warehouse-anywhere-history-future-ecommerce-1.jpg" alt="" className="project__img"  width="80px" height="200px" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">E-commerce App</h5>
                     <h4 className="project__text">Using MERN Stack</h4>
                     <a href="https://digi-world.netlify.app/" className="project__btn" target="_blank">View</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://media.istockphoto.com/id/1344724504/photo/user-based-blockchain-futuristic-technology-backgrounds.jpg?b=1&s=170667a&w=0&k=20&c=TyjtjWyzpmtZL8G-NaxiyFEN7mEtyVTnEEJ56nXNPYY=" alt="" className="project__img" width="80px" height="200px"/>
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Social Media App</h5>
                     <h4 className="project__text">Using MERN Stack</h4>
                     <a href="https://connect-ezru.onrender.com" className="project__btn" target="_blank">View</a>
                     </div>
                 </div>
             </div>


             {/* <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://www.mobinius.com/wp-content/uploads/2015/03/android-app-development-company.jpg" alt="" className="project__img" width="80px" height="200px"/>
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">App development</h5>
                     <h4 className="project__text">React native</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div> */}


            
           </div>
       </div>
    </div>
  );
}

export default Project;
