import Head from 'next/head'
import Link from 'next/link'
import Style from '../styles/index.module.css'
import React, { useState } from "react";




export default function DamilolaInfo() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);


    const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  return (
    <div>
        <Head>
            <title>Damilola Daniel</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Source+Sans+Pro&family=Playfair+Display&display=swap" rel="stylesheet" />
            <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Head>

        <div className="w3-top bg-gray-200" id = "home">
            <div className="w3-bar bg-gray-200" id="myNavbar">
            
                <div className = {Style.fulldiv} style = {{paddingTop:'10px'}}>
                    <img className = {Style.pub} src = "images/loog2.png" />
                </div>
                <div className="w3-right w3-hide-small">
                    <Link href="#"><a  className="w3-bar-item w3-button xee" style = {{color:'black'}}> Home</a></Link>
                    <Link href="#"><a  className="w3-bar-item w3-button xee" style = {{color:'black'}}> Programs</a></Link>
                    <Link href="#"><a  className="w3-bar-item w3-button xee" style = {{color:'black'}}> Blog</a></Link>
                    <Link href="#"><a  className="w3-bar-item w3-button xee" style = {{color:'black'}}> Gallery</a></Link>
                </div>

                <span className="w3-bar-item w3-right w3-hide-large w3-hide-medium free" onClick={toggleMenu}>
                    <div className={`${menuIsOpen ? "burger" : "newclass"} ...rest`}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                </span>
            
                <span className={`${menuIsOpen ? "open" : "closed"} ...rest`}>
                    <nav class="w3-sidebar fro w3-bar-block w3-animate-left w3-hide-medium w3-hide-large w3-center">
                    
                        <Link href="#"><a  onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Home</p></a></Link>
                        <Link href="#about"><a onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Programs</p></a></Link><br />
                        <Link href="#photos"><a onClick={toggleMenu}  className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Blog</p></a></Link><br />
                        <Link href="#photos"><a onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Gallery</p></a></Link><br />
                    </nav>
                </span>
            </div>
        </div>


        
        <div className="w3-container bg-gray-200" >
            <div className="w3-col m6  flex justify-center">
                <img className = " w-2/3  sm:w-1/2 lg:w-2/3 rounded-full" src="/images/st.jpeg" alt="" />
            
            </div>
            <div className="w3-col m6 ">
                <div className = " text-center pt-12 bow">
                    
                    <h3 className = "id text-2xl font-semibold">Damilola Daniel</h3>
                    <p className = "id2 text-xl py-2">Head, Media</p>
                    <p className = "id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">Daniel Damilola is a medical student at the University of Ilorin. 
                        She's a lover of God, fashion designer, public health advocate and graphics designer. 
                        She's passionate about personal development, love reading novels, traveling and learning new things.
                    </p>
                    <div className = "text-lg lg:text-xl pt-2">
                    <a href = "https://www.facebook.com/daniel.damilola.100"><i class="fab hover:text-gray-900 fa-facebook-f "></i></a>
                    <a href = "https://www.linkedin.com/in/damilola-elizabeth-daniel-3b75351b5"><i class="fab hover:text-gray-900 fa-linkedin "></i></a>
                    </div>
                </div>
            </div>

        
        </div>
          {/* Footer   */}
          <div className="PD bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="" fill-opacity="1" d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,213.3C1120,213,1280,267,1360,
                293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" 
                >
                </path>
                </svg>
            </div>

            <footer className="w3-black w3-padding-64">
            

            <div className = {Style.footer}>
            <div>
                <h3><i className = "fas fa-map-marker-alt"></i>Address</h3>
                <p>University Road, Tanke, <br /> 
                Ilorin, Kwara State
                </p>
            </div>


            <div>
                <h3><i className = "fas fa-phone-alt"></i>Phone</h3>
                <p>+234 814 529 3779</p>
            </div>


            <div>
                <h3><a href="https://twitter.com/TheSMA_Impact?s=09"><i className="fab fa-twitter fa-1x"></i></a>Twitter</h3>
                <p>@TheSMA_Impact</p>
                </div>


                <div>
                <h3> <a href="https://www.instagram.com/the_sma__/"><i className="fab fa-instagram fa-1x"></i></a>Instagram</h3>
                <p>@the_sma__</p>
                </div>


                <div>
                <h3><a href="https://www.facebook.com/The-S-M-A-Impact-Network-108033684355867/"><i className="fab fa-facebook-f fa-1x"></i></a>Facebook</h3>
                <p>@The S.M.A Impact Network</p>
                </div>
            </div>
            </footer>
            <div className = {Style.lil}>
            <a href="#home" className="mug w3-button" style = {{backgroundColor:"#5e0505;"}}><i className=" fa fa-arrow-up" style = {{color:"white"}}></i></a>
            <p ><span style={{color:"rgb(255, 255, 255)"}}>&copy; 2020, SMA Impact Network</span></p>
            </div>
            

        <style jsx>{`
       
        @media screen and (max-width: 992px){
            .w3-col.m6 {
                width: 100%;
            }
            .w3-right {
                padding: 10px 50px 0px 0px;
            }
        }
        @media screen and (min-width: 600px) {
            .w3-hide-large{display:none!important}.
           
        }
        @media screen and (max-width:400px){
            .newclass, .burger{
              margin:0px -40px 0px 0px;
            }
          }
        div.PD{
            margin-bottom: -9px;
        }
        .mug{
            border-radius:50%;
            padding:8px 16px;
       
          }
        body, html {
            height: 100%;
            line-height: 1.8;
        }
      
        .w3-container{
            padding-top:8rem;
        }
        .w3-right {
            padding: 10px 80px 0px 0px;
        }
        .w3-top{
            position:relative;
        }
        .bow{
            color:rgb(94, 5, 5);
        }
        .id{
            font-family: 'Playfair Display', serif;
        }
        .id2{
            font-family: 'Source Sans Pro', sans-serif;
        }
        
        .w3-bar .w3-button {
            padding: 18px;
        }
        .xee{
            padding-left:25px;
        }
        
        a:hover{
            text-decoration: none;
        }
       
        .xee,.w3-button{
            transition:background 0.5s;
            
        }

        `}</style>
    </div>
   

  )
}