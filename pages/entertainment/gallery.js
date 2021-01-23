import Head from 'next/head'
import Style from '../../styles/index.module.css'
import React, { useState } from "react";


export default function Gallery() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  

  
  return (
    <div className = "body">
        <Head>
            <title>Gallery</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
           
            <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Pacifico&family=Bodoni+Moda&family=Noto+Serif+JP&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Sofia&family=Old+Standard+TT&family=Roboto+Slab&family=Lato:ital@1&display=swap" rel="stylesheet" />
            <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Head>
        <div className="w3-top bg-black " id = "home">
            <div className="w3-bar bg-black " w3- id="myNavbar">
            
                <div className = "w3-left bg-white md:pl-4" style = {{paddingTop:'0px'}}>
                    <img className = "pub" src = "images/loog2.png" />
                </div>
                <div className="w3-right w3-hide-small topdiv flex sm:flex-row items-center" style = {{ display:'flex !important'}}>
                   
                    <a  href="/" className="w3-bar-item w3-button xee" > Home</a>
                    <a href="/programs" className="w3-bar-item w3-button xee" > Programs</a>
                    <a   href="/blog"className="w3-bar-item w3-button xee"> Blog</a>
                    <a href="#"  className="w3-bar-item w3-button xee" > Gallery</a>
                </div>

                <span className="w3-bar-item w3-right w3-hide-large w3-hide-medium " onClick={toggleMenu}>
                    <div className={`${menuIsOpen ? "burger" : "newclass"} ...rest`}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                </span>
            
                <span className={`${menuIsOpen ? "open" : "closed"} ...rest`}>
                    <nav class="w3-sidebar fro w3-bar-block w3-animate-left w3-hide-medium w3-hide-large w3-center">
                    
                        <a href="/" onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Home</p></a>
                        <a href="/programs" onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Programs</p></a><br />
                        <a href="/blog" onClick={toggleMenu}  className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Blog</p></a><br />
                       <a  href="#" onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Gallery</p></a><br />
                    </nav>
                </span>
            </div>
        </div>

        {/* Blog Section */}
        <div className = "w3-container">
            <div className = "blog-title-head">
                <h1 className = "blog-title text-gray-800">Image Gallery</h1>
            </div>
            <div className = "blog-container">
            <div className="w3-col s3 blog" >
                    <div><img src = "images/hangout1.jpg" alt = "" /></div>
                    <div><h2>SMA Network Hangout</h2></div>
                </div>
                <div className="w3-col s3 blog" >
                    <div><img src = "images/hangout2.jpg" alt = "" /></div>
                    <div><h2>SMA Network Hangout</h2></div>
                </div>
                <div className="w3-col s3 blog" >
                    <div><img src = "images/hangout3.jpg" alt = "" /></div>
                    <div><h2>SMA Network Hangout</h2></div>
                </div>
               
            </div>
        </div>

        {/* Footer   */}
            <div className="PD ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="" fill-opacity="1" d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,213.3C1120,213,1280,267,1360,
                293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" 
                >
                </path>
                </svg>
            </div>

            <footer className="w3-black w3-padding-64" >
        <div className={Style.footer}>
          <div>
            <h3>
              <i className="fas fa-map-marker-alt"></i>Address
            </h3>
            <p>
              University Road, Tanke, <br />
              Ilorin, Kwara State
            </p>
          </div>

          <div>
            <h3>
              <i className="fas fa-phone-alt"></i>Phone
            </h3>
            <p>+234 814 529 3779</p>
          </div>

          <div>
            <h3>
              <a href="https://twitter.com/TheSMA_Impact?s=09">
                <i className="fab fa-twitter fa-1x"></i>
            
              </a>
                  Twitter
              
            </h3>
            <a href="https://twitter.com/TheSMA_Impact?s=09">
            <p>@TheSMA_Impact</p>
            
              </a>
           
          </div>

          <div>
            <h3>
              {" "}
              <a href="https://www.instagram.com/the_sma__/">
                <i className="fab fa-instagram fa-1"></i>
              
              </a>
              Instagram
            </h3>
            <a href="https://www.instagram.com/the_sma__/">
            <p>@the_sma__</p>
              
              </a>
            
          </div>

          <div>
            <h3>
              <a href="https://www.facebook.com/The-S-M-A-Impact-Network-108033684355867/">
                <i className="fab fa-facebook-f fa-1x"></i>
              
              </a>
              Facebook
            </h3>
            <a href="https://www.facebook.com/The-S-M-A-Impact-Network-108033684355867/">
            <p>@The S.M.A Impact Network</p>
              
              </a>
            
          </div>
        </div>
      </footer>
            <div className = {Style.lil}>
            <a href="#home" className="mug w3-button" style = {{backgroundColor:"#5e0505;"}}><i className=" fa fa-arrow-up" style = {{color:"white"}}></i></a>
            <p ><span style={{color:"#a9a9a9"}}>&copy; 2021, SMA Impact Network</span></p>
            </div>
            
        <style jsx>{`
        .w3-hide-large{
            display:none;
        }
         div.PD{
            margin-bottom: -9px;
        }
        .blog-title{
            font-family: 'Sofia', cursive;
           
        }
        .mug{
            border-radius:50%;
            padding:8px 16px;
       
          }
        .xee{
            padding:10px;
            color:#c0c0c0;
            margin-left:30px;
        }
        .w3-button:hover{color:white!important;background-color:black !important};
      
        .fulldiv {
            padding-left: 0px;
         }
        .pub {
        width: 60px ;
        height: 60px;
        position: relative;
        padding-top:0px;
        }
        .w3-top{
            position:relative;
        }
        .topdiv{
            height:60px;
            padding-right:30px;
        }
        .blog-container{
            margin-left:1.666% !important;
        }
        .blog{
            margin:1.66%;
            height:50%;
         
        }
        .blog-title{
            padding-top:10px;
        }
        .blog h2{
            font-family: 'Bodoni Moda', serif;
            font-size: calc(20px + 5*(100vw - 400px)/1000);
        }
        .blog p{
            font-family: 'ABeeZee', sans-serif;
        }
        .w3-col.s3{width:30%;}
        img{
            width:100%;
            height:500px;
        }
        @media screen and (min-width: 600px){
        .blog-title {
            text-align:center;
            font-size: calc(40px + 15*(100vw - 600px)/1000);
         }
        }
        @media screen and (max-width: 900px){
        .w3-col.s3{width:40%;}
        .blog{
            margin:4%;
          
        }
        img{
            height:400px;
        }
        .blog-container{
            margin-left:4% !important;
        }
        }
        @media screen and (max-width: 768px){
            .w3-col.s3{width:42%;}
            .blog{
                margin:3%;
               
            }
            .blog-container{
                margin-left:3% !important;
            }
            img{
                height:400px;
            }
            }
            @media screen and (max-width: 650px){
                
                img{
                    height:350px;
                }
                }
        @media screen and (max-width: 600px){
            .w3-col.s3{width:80%;}
            .blog-container{
                margin-left:1% !important;
            }
            .blog{
                margin:5% 10% 8% 10%;
              
            }
            img{
                height:500px;
            }
            .blog-title{
                margin-left:10% !important;
            }
            .xee{
                margin-left:10px;
            }
            }
            @media screen and (max-width: 500px){
                .xee{
                    margin-left:0px;
                    font-size:15px !important;
                }
                img{
                    height:400px;
                }
            }
        @media screen and (max-width: 400px){
            .w3-col.s3{width:90%;}
            .blog{
                margin:5% 5% 8% 4%;
                
            }
            .xee{
                font-size:14px !important;
            }
            .topdiv {
                padding-right: 0px;
            }
            .blog-title{
                margin-left:5% !important;
            }
            }
            @media screen and (max-width: 330px){
            .pub {
                width: 40px ;
                height: 40px;
               
                }
                .topdiv {
                    height:40px;
                }
            }
        `}</style>
    </div>
  )
}