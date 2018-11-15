import React from "react";
import "./Contact.css";
import ScrollToPrevious from "../ScrollToPrevious";
import Icon from "../Icon"

const Contact = () => (
  <div id="section-3" className="hero contact">
    <div className="subject container">
      <div className="row">
        <div className="col m6 offset-m3 s12 header-wrapper center">
          <h1 className="page-header" >Contact</h1>




            



    </div>
    </div>
      
      <div className="row">
        <div className="col s12 center-align">
        <img style={{width: "300px", height: "300px"}}
            src="/images/derek.gif"
            alt=""
            class="circle responsive-img"
            // style={{ height: "300px", width: "300px" }}
          />
            <br></br>
          <a href="https://github.com/derek1331" target="_blank" ><Icon icon="fab fa-github fa-5x social"/></a>
          <a href="https://www.linkedin.com/in/derekreed1331/" target="_blank" ><Icon icon="fab fa-linkedin fa-5x social"/></a>
          <a href="mailto:derekr1331@gmail.com" target="_blank" ><Icon icon="fas fa-envelope fa-5x social"/></a>



            



    </div>
    </div>
      </div>

    <ScrollToPrevious pageSelector="#section-2" />
  </div>
);

export default Contact;
