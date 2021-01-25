import React, { useState } from "react";




export default function Nav(){

   const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

    return(
      <>
         <div className="w3-top" id="top">
        
          <div
            className="myNavBar px-8 w-full flex flex-row justify-between items-center "
            style={{ boxShadow: "none" }}
          >
           
            <div className="hhh">
                <img className='pub' src="/images/loog2.png" />
            </div>
          
            <div
              className="w3-hide-small "
           
            >
            
              <a href="/" className="w3-bar-item w3-button xee " style={{ color: "black" }}>
                {" "}
                Home
                
              </a>
              <a href="/works/programs" className="w3-bar-item w3-button xee" style={{ color: "black" }}>
                {" "}
                Programs
              </a>
              <a href="/entertainment/blog" className="w3-bar-item w3-button xee" style={{ color: "black" }}>
                {" "}
                Blog
              </a>
              <a href="/entertainment/gallery" className="w3-bar-item w3-button xee" style={{ color: "black" }}>
                {" "}
                Gallery
              </a>
              <a href="#contact" className="w3-bar-item w3-button xee" style={{ color: "black" }}>
                Contact
              </a>
            </div>
  
            <span
              className="w3-bar-item w3-right w3-hide-large w3-hide-medium free"
              onClick={toggleMenu}
            >
              <div className={`${menuIsOpen ? "newclass" : "burger"} ...rest`}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </span>
          </div>
  
          <span className={`${menuIsOpen ? "open" : "closed"} ...rest`}>
            <nav className="w3-sidebar fro w3-bar-block w3-animate-left flex flex-col justify-around w3-hide-medium w3-hide-large w3-center">
              <a
                href="/"
                onClick={toggleMenu}
                className="w3-button w3-hover-white"
                style={{ width: "100%", color: "white" }}
              >
                <p>Home</p>
              </a>
           
              <a
                href="/works/programs"
                onClick={toggleMenu}
                className="w3-button w3-hover-white"
                style={{ width: "100%", color: "white" }}
              >
                <p>Programs</p>
              </a>
              <a
                href="/entertainment/blog"
                onClick={toggleMenu}
                className="w3-button w3-hover-white"
                style={{ width: "100%", color: "white" }}
              >
                <p>Blog</p>
              </a>
              <a
                href="/entertainment/gallery"
                onClick={toggleMenu}
                className="w3-button w3-hover-white"
                style={{ width: "100%", color: "white" }}
              >
                <p>Gallery</p>
              </a>
             
              <a
                href="#contact"
                onClick={toggleMenu}
                className="w3-button  w3-hover-white"
                style={{ width: "100%", color: "white" }}
              >
                <p>Contact</p>
              </a>
            </nav>
          </span>
        </div>
        <style jsx>{`
        .w3-top{
          position:relative !important;
        }
          .w3-button:hover, .w3-button:focus {
            color: #a9a9a9 !important;
            background-color: transparent !important;
          }
         
           .pub {
            width: 70px ;
            height: 70px;
           
            }
          @media screen and (max-width: 900px) {
            .w3-hide-small {
              display: none;
            }
          }
          @media screen and (max-width: 330px){
            .pub {
                width: 40px ;
                height: 40px;
               
              }}
        `}</style>
      </>
    )
}