import Head from 'next/head'
import Link from 'next/link'
import Style from '../styles/index.module.css'
import React, { useState } from "react";


export default function Program() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  

  
  return (
    <div className = "body">
        <Head>
            <title>What We Do</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
           
            <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Pacifico&family=Noto+Serif+JP&&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Sofia&family=Old+Standard+TT&&family=Roboto+Condensed:wght@700&family=Roboto+Slab&family=Lato:ital@1&display=swap" rel="stylesheet" />
            <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Head>
        <div className="w3-top" id = "home">
            <div className="w3-bar w3-card" className="myNavbar" style = {{boxShadow:"none" }}>
                <div className = {Style.fulldiv}>
                    <img className = {Style.pub} src = "images/loog2.png" />
                </div>
                <div className = {Style.textdiv} id = "toppo">
                    <div >
                    <h3 className = "over">We Organize <span style = {{color: "#EC0000"}}>Training </span> <br/> Programs as
                    a means of fulfilling our mission
                    </h3>
                    {/* <p>Everyone has potentials for influence and it can be developed under the right atmosphere</p> */}
                    </div>
                </div>
        
                <div className="w3-right w3-hide-small boye" style = {{ display:'block !important'}}>
                <a  href="/" className="w3-bar-item w3-button xee" > Home</a>
                    <a   href="/blog"className="w3-bar-item w3-button xee"> Blog</a>
                    <a href="/gallery"  className="w3-bar-item w3-button xee"> Gallery</a>
                </div>

                <span className="w3-bar-item w3-right w3-hide-large w3-hide-medium free" onClick={toggleMenu}>
                    <div className={`${menuIsOpen ? "newclass" : "burger"} ...rest`}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </span>
            </div>

            <span className={`${menuIsOpen ? "open" : "closed"} ...rest`}>
                <nav class="w3-sidebar fro w3-bar-block w3-animate-left w3-hide-medium w3-hide-large w3-center">
                
                <a href="/" onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Home</p></a>
                        <a href="/blog" onClick={toggleMenu}  className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Blog</p></a><br />
                       <a  href="/gallery" onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Gallery</p></a><br />
                </nav>
            </span>
            
        </div>

        <header className="bgimg-1 w3-display-container w3-grayscale-min rounded-bl-full ">
            <img className = "star " src = "images/star.svg" />
        </header>
        <div className="w3-container" > 
            <div className = "fix  w-full">
                <div className="w3-col m6 flex pt-8 sm:pt-14 lg:pt-0 justify-center items-center">
                    <div className="beyhead  lg:pl-32">
                        <h1 className=" bey text-gray-500 " >What</h1>
                        <h1 className="bey text-gray-500 pl-2 lg:pl-0">We</h1>
                        <h1 className="bey text-gray-500 pl-2 lg:pl-0">Do</h1>
                      
                    </div>
                </div>
                <div className="w3-col m6 px-0  sm:pr-20 pt-0 sm:px-12 lg:px-0 lg:pt-16 why">
                   
                    <p className = "add"><img src = "images/dot1.svg" className = "inline pr-2" /> We hold capacity building conferences, seminar and webinars </p>
                    <p className = "add"><img src = "images/dot2.svg" className = "inline pr-2"/> We train young ones on social impact, social entrepreneurship and community influence</p>
                    <p className = "add"><img src = "images/dot3.svg" className = "inline pr-2"/>  We train (our members and volunteers) on key issues pertaining to Impact, Relevance and Influence </p>
                    <p className = "add"> <img src = "images/dot4.svg"className = "inline pr-2" /> We train secondary school students on Career Pathway and Development,
                        Financial Intelligence and the need for early social impact</p>
                    <p className = "add"> <img src = "images/dot5.svg"className = "inline pr-2" /> We organize social/ community outreaches in a bid to reach out to
                        people in need as touching different areas of influence</p>
                </div>
            </div>
        </div>
        <div className="w3-container mt-12 lg:mt-14 ">
            <div >
                <h1 className = "pro md:30px; text-gray-500 text-center pb-2 sm:pb-8">Our Programs</h1>
            </div>
            <div className = "w3-col s9 cop  flex items-center  pl-0 sm:pl-10 md:pl-20">
                <img className = "crop rounded-r-full" src = "images/up.jpg" />
                <p className = "pl-2 sm:pl-10 pr-4 sm:pr-10 md:pr-20 lg:pr-4 text-gray-900 pt-6 lg:pt-0 ">
                   <b > UPSURGE</b><br/>
                    An online personal development and self activation conference
                    that centres on helping participants gain mastery over specific spheres of life.
                    This program centers on grooming individuals with relevant information necessary for 
                    development in the area of concerns discussed.
                    Over the months, UPSURGE has trained over 100 young individuals on different spheres of influence.
                    Previous editions have paid attention to Self Awareness, Journey to Purpose Discovery,
                    Career Development, Entrepreneurship to mention a few.
                </p>
            </div>
            
            <div className = "w3-col s9 flew  cop  flex items-center lg:pr-20 mt-10 ">
                <p className = "lg:pr-10 pl-0 sm:pl-10 sm:pr-16 lg:pl-8 text-gray-900 pt-6 lg:pt-10">
                <b>IGNITION</b>< br/>
                A conference that that is set to build and equip SECONDARY 
                SCHOOL STUDENTS to be relevant in
                their local environment and spheres of influence

                The Network believes in the "Catch Them Young" strategy. Hence, this conference is designed to IGNITE
                these young students into personal and community development, early enough. This program emphasizes
                on extra-curricular informations like Emotional Intelligence, Self Hack, Community Influence,
                Financial Intelligence, Advocacy and many other areas as a strategy of building these
                students to become effective changemakers in their local communities and the world at large.
                </p>
               
                <img className = "crop rounded-l-full bom"  src = "images/ignite.jpg" /> 
              
            </div>
                {/* Footer   */}
          


        </div>
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
            <p ><span style={{color:"rgb(255, 255, 255)"}}>&copy; 2020, SMA Impact Network</span></p>
            </div>
            

<style jsx>{`
.boye{
    padding:10px 80px 0px 0px;
}
.pro{
    font-family: 'Pacifico', cursive;
}
 .w3-hide-large{
      display:none;
  }
.beyhead{
    display:flex;
    flex-direction:column;
      margin-left:40px;
}
.text-gray-900{
    font-family: 'Old Standard TT', serif;

}
.cop b{
    font-size:18px;
}
.fix{
    display:flex;
    flex-direction: row;
    justify-content:around;
}
   .star{
    position:absolute;
    bottom:0;
    z-index:30;
 }
 

.crop{
    width:400px;
    height:300px;
}
.flew{
    float:right;
}
.add{
    font-family: 'Source Sans Pro', sans-serif;
}
.bey{
    font-family: 'Pacifico', cursive;
    margin-left:25px;
}

@keyframes zoominout {
    from{
        transform: scale(0.2);
    }
    to {
        transform: scale(0.8);
    }
}
.inline{
    animation: zoominout 4000ms infinite alternate;
}
.norm{
    background-color: none;
  }
.why p{
    padding-bottom:20px;
}

.xee{
    padding:10px;
    color:white;
    margin-left:30px;
    
  }
  .bgimg-1{
    background-image: linear-gradient(rgba(0,0,0,0.5),
    rgba(0,0,0,0.5)), url('images/sticky.jpg');
}

#toppo h3{
    font-weight: 600;
}
@media screen and (max-width:1024px){
    .over{
        font-size:30px;
    }
    .w3-col.s9 {
        width: 100%;
    }
}
@media screen and (max-width: 900px){
.w3-col.s9 {
    width: 100%;
}

.w3-col {
    float: none !important;
}
#float > img{
    float:right;
}
.over{
    font-size:30px;
}
.flew{
    padding-left:20px;
    float:none;
    

}
.flew p{
    order:2;
}
.flew img{
    order:1;
}

.cop{
    padding-right:20px;
    flex-direction:column;
    align-items:start !important;
}
.bom{
margin-left:30%

}
.fix{
    flex-direction: column;
}
.beyhead{
    flex-direction:row;
    margin-left:0px;
}
.w3-col.m6{
    width:100%;
}
.bey{
    margin-left:0px;
}
.star{
   position:absolute;
   bottom:0;
}



}

  @media screen and (max-width: 800px) {
      .over{
          font-size:25px;
      }
  }
  @media screen and (max-width: 750px) {
    #toppo{
        display:none;
    }
    .bgimg-1{
        background-image: url('images/sticky.jpg');
    }
    .xee{
        color:black;
    }
    .bom{
        margin-left:17%;
        
        }
    .newclass {
        background-color: #e8e8e8;
      }
    
      .burger {
        background-color: #12262D;
      }
      .newclass div{
        background-color: #191820;
      
      }
      .burger div {
        background-color: white;
      
      }
      
    
   
}
 
  .xee,.w3-button{
    transition:background 0.5s;
    
  }
 


@media screen and (max-width:500px){
    .crop{
    width:300px;
    height:200px;
}
.boye{
    padding:5px 0px 0px 0px;
}
.bom{
    margin-left:12%;
    
    }
.why p {
    font-size:14px;
}
.cop p{
    font-size:14px;
}
.cop b{
    font-size:16px;
}
.beyhead h1, .pro{
    font-size:25px;
}
.flew{
    padding-left:0px;
  
}
.star{
    width:60px;
    height:60px;
}
.xee{
    padding:10px;
   
    margin-left:0px;
    
  }
  .xee:hover{
      color:white;
  }
}
@media screen and (max-width:400px){
    .bgimg-1 {
      background-size: 100% 100%;
      height: 300px;
    } 
    
  }


`}</style>


</div>
)
}