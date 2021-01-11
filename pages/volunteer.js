import Head from 'next/head'
import Style from '../styles/index.module.css'
import React, { useState } from "react";

export default function Volunteer() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  
    const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
    
  
    
    return (
        <div className = "body">
            <Head>
              <title>Volunteer with us</title>
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

            <div className = "w3-container ">
                <h2 id = "touch" className = "text-center">Volunteer with us</h2>
            </div>
            {/* Volunteer form */}
            <div className = "w3-container  cont flex items-center ">
                <div className = "w3-col s6  formdiv flex "> 
                  
                    <form className = " formhead " method = "POST" data-netlify = "true">
                        <input type="text" placeholder="Name" required="" className = "input"/> 
                        <input className = "input" type="email" id="email" name="email" placeholder="Email Address" required="" pattern="^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([A-Za-z]{3})$" /> <br className = "br" />
                        <input className = "input" type="text" placeholder="Location(City and Country)" required /> 
                        <input className = "input" type="number" placeholder="Phone Number(Whatsapp)" required/> <br className = "br" />

                        <textarea placeholder="What are your strengths ?" id="strength" required></textarea> 
                        <textarea placeholder="What do you consider to be your weakness(es) ?" id="weakness(es)"required ></textarea> <br className = "br" />                        
                        <textarea placeholder="Why wil you like to volunteer with us ?" id="Reason" required></textarea> 
                        <textarea placeholder="What skills do you have ?" id="Skills" required></textarea>  <br className = "br" />

                        <div className = "inline special">
                            <p>Gender</p>
                            <input type="radio" id="male" name="gender" value="male" />
                            <label for="male"> Male</label><br />
                            <input type="radio" id="female" name="gender" value="female" />
                            <label for="female"> Female</label><br />
                        </div>

                        <div className = "inline ">
                            <p>Have you volunteered in an organization before ? </p>
                            <input type="radio" id="yes" name="answer" value="Yes" />
                            <label for="yes"> Yes</label><br />
                            <input type="radio" id="no" name="answer" value="No" />
                            <label for="no"> No</label><br />
                        </div>
                        <div className = "flex bow ">
                        <div className = " inline but">
                            <p> What department will you like to volunteer with?</p>
                            <input type="radio" id="department1" name="department" value="Content and Communications" />
                            <label for="department1"> Content and Communications</label><br />
                            <input type="radio" id="department2" name="department" value="Strategy and Logistics" />
                            <label for="department2"> Strategy and Logistics</label><br />
                            <input type="radio" id="department3" name="department" value="Media" />
                            <label for="department3"> Media</label><br />
                        </div>

                        <div className = "inline but">
                            <p>How long will you like to volunteer with us ?</p>
                            <input type="radio" id="duration1" name="duration" value="3 Months" />
                            <label for="duration1"> 3 Months</label><br />
                            <input type="radio" id="duration2" name="duration" value="6 Months" />
                            <label for="duration2"> 6 Months</label><br />
                        </div>
                        </div>
                        <div className = "text-center">
                        <button type="submit" id="button" className = "onebutton">Submit<i class="far fa-arrow-alt-circle-right" aria-hidden="true"></i></button>
                        </div>
                    </form>
                </div>
                <div className = "w3-col s6 flex items-center order">
                    <img src = "images/volunteer.jpg" alt = ""/>
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
            <p ><span style={{color:"rgb(255, 255, 255)"}}>&copy; 2021, SMA Impact Network</span></p>
            </div>
            

        <style jsx>{`
        #touch{
            font-family: 'Sofia', cursive;
          
        }
        .onebutton{
            margin:0 auto;
            font-family: 'ABeeZee';
            color:#053d59;
            font-size:15px;
            padding:8px 22px;
            border-top:1px solid #053d59;
            border-right:1px solid #053d59;
            border-bottom:1px solid #053d59;
            border-top-right-radius:50%;
            border-bottom-right-radius:50%;
        }
        .onebutton:hover , .onebutton:focus{
            border-top:1px solid #808080;
            border-right:1px solid #808080;
            border-bottom:1px solid #808080;
            color:#808080;
        }
        .inline{
            display:inline-block;
          
        }
        .inline, .but{
            margin:10px 2.5%;
            font-family: 'ABeeZee';
            font-size: 14px;
            color:#053d59;
        }
        .special{
            width:20%;
        }

        .formdiv{
           
        }
        .formhead{
            width:100%;
        }
        .input{
            width:45%;
            height:40px;
            border:1px solid #f3f3f3;
            background-color: #f3f3f3;
            border-radius: 0.6em;
            padding:20px;
            margin:10px 2.5%;
            font-family: 'ABeeZee';
           
            font-size: 14px;
            color:#053d59;
            
            
            }
        textarea{
            color:#053d59;
            font-family: 'ABeeZee';
            border:1px solid #f3f3f3;
            background-color: #f3f3f3;
            border-radius: 0.6em;
            padding:20px;
            margin:10px 2.5%;
            width:45%;
            height:120px;
            font-size: 14px;
            }
        .w3-hide-large{
            display:none;
        }
         div.PD{
            
            margin-bottom: -9px;
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
       
        
        @media screen and (min-width: 600px){
        .blog-title {
            text-align:center;
            font-size: calc(40px + 15*(100vw - 600px)/1000);
         }
        }
        @media screen and (max-width: 1000px){
            .input, textarea{
                padding:10px;
                }
           
        }
        @media screen and (max-width: 950px){
          .w3-col.s6 {
              width:100%;
          }
          .formdiv{
              order:2;
          }
          .order{
              order:1;
          }
          .cont{
            
              flex-direction:column !important;
             align-items:center;
          }
          .formdiv{
              width:90% !important;
          }
          .input, textarea{
            padding:20px;
            width:48%;
            margin:10px 1%;
            }
        }
        @media screen and (max-width: 768px){
            .formdiv{
                width:100% !important;
            }
            }
        @media screen and (max-width: 600px){
            .input ,textarea{
                display:block;
                padding:20px;
                width:90%;
                margin:15px 0%;
            }
            .br{
                display:none;
            }
            .xee{
                margin-left:10px;
            }
            .bow{
               flex-direction:column ;
            }
            }
            @media screen and (max-width: 500px){
                .xee{
                    margin-left:0px;
                    font-size:15px !important;
                }
                #touch{
                   
                    font-size:25px;
                }
            }
        @media screen and (max-width: 400px){
            .input ,textarea{
                width:100%;
               
            }
            
            .xee{
                font-size:14px !important;
            }
            .topdiv {
                padding-right: 0px;
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