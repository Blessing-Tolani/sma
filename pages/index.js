import Head from 'next/head'
import Link from 'next/link'
import Style from '../styles/index.module.css'
import React, { useState } from "react";


export default function Fullpage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  

  
  return (
    <div className = "body">
    <Head>
      <title>SMA Impact Network</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Noto+Serif+JP&&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Sofia&family=Roboto+Condensed:wght@700&family=Roboto+Slab&family=Lato:ital@1&display=swap" rel="stylesheet" />
      <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <div className="w3-top" id = "home">
        <div className="w3-bar w3-card" className="myNavbar" style = {{boxShadow:"none" }}>
          <div className = {Style.fulldiv}>
            <img className = {Style.pub} src = "images/loog2.png" />
          </div>
          <div className = {Style.textdiv}>
            <div className = {Style.norm}>
              <h3>We <span style = {{color: "#EC0000"}}>Help</span> People<br/> Build Capacity to Influence Their World</h3>
              <p>Everyone has potentials for influence and it can be developed under the right atmosphere</p>
            </div>
          </div>
       
          <div className="w3-right w3-hide-small" style = {{padding:"10px 80px 0px 0px;"}}>
          <Link href="#"><a  className="w3-bar-item w3-button xee"> Home</a></Link>
            <Link href="#about"><a  className="w3-bar-item w3-button  xee"> About</a></Link>
            <Link href="#work"><a  className="w3-bar-item w3-button xee"> Programs</a></Link>
            <Link href="#work"><a  className="w3-bar-item w3-button xee"> Blog</a></Link>
            <Link href="#work"><a  className="w3-bar-item w3-button xee"> Gallery</a></Link>
            <Link href="#donate"><a  className="w3-bar-item w3-button xee"> Donate</a></Link>
            <Link href="#contact"><a  className="w3-bar-item w3-button xee">Contact</a></Link>
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
           
            <Link href="#"><a  onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Home</p></a></Link>
            <Link href="#about"><a onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p> About</p></a></Link><br />
            <Link href="#about"><a onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Programs</p></a></Link><br />
            <Link href="#photos"><a onClick={toggleMenu}  className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Blog</p></a></Link><br />
            <Link href="#photos"><a onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Gallery</p></a></Link><br />
            <Link href="#donate"><a onClick={toggleMenu} className="w3-button w3-hover-white" style ={{width:"100%", color:"white"}}><p>Donate</p></a></Link><br />
            <Link href="#contact"><a onClick={toggleMenu} className="w3-button  w3-hover-white" style ={{width:"100%", color:"white"}}><p>Contact</p></a></Link>
          </nav>
        </span>
        
</div>

<header class="bgimg-1 w3-display-container w3-grayscale-min" style = {{backgroundImage:"url('images/women.jpg')"}}>

</header>

{/* Director's Biography */}
<div className="w3-container article" >
  <div className="w3-row-padding ">
    <div className="w3-col s6 speech">
        <h3 className = {Style.heady}><span className = "doob">Director</span></h3>
        <p className ={Style.welcome} id = "help"> 
          <span  className = "doob"> Hello!
         My name is Marvellous Ayomide Sunmiboye </span><br />
         <span className = "doob">Welcome to our online space.
          This organization has a passion to see young people grow to a </span> <span className = "doob">place where they are accurately
           built to begin to positively influence </span>   <span className = "doob">and impact their local environment and furthermore, 
           creating relevance for themselves. </span>
          
           <span className = "doob">I for one believe that if every one is given to accurate building, 
          mentorship and capacity building, the "future" 
           we have always spoken about would be nearer than we think. </span><br />

          <span className = "doob">It's Growth, it's Impact, it's Relevance.</span> <br />
          
          
          <span className = "doob">Welcome to the Future.</span>
           </p>
        <p className = {Style.welcome}> <span>Thanks</span></p>
     
    </div>
    <div className="w3-col m6 pause ">
      <img className="w3-image w3-round-large bioimage1" src="images/teamwork.jpg" alt="" />
    </div>
  </div>
</div>

<section id="information" style = {{backgroundColor:"black"}}>

  <div className="w3-container un0" id="about">
      <h3 className="w3-center network" >About the Network</h3>

      <div className="container" style= {{marginTop:"64px"}}>
        <div className="row">
          <div className="col-sm-6 vision" style={{textAlign:"center"}}>
          <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" style= {{color:"#FED700;"}}></i>
          <p className="w3-large un1" >Vision</p>
          <p  className = "un2"> To see a community, nation, world where every young person finds their place and begin to influence their 
          environment positively.</p>   
          </div>
  
          <div className="col-sm-6 mission" style = {{textAlign:"center"}}>
          <i className="fa fa-heart w3-margin-bottom w3-jumbo" style= {{color: "#FED700" }}></i>
          <p className="w3-large" style={{color:"white"}}>Mission</p>
          <p className = "un2"> To build, challenge, enlighten and equip young people to become the best they can through strategic programs
          and platforms that impact would no longer be a scarce thing in a generation.</p>
          </div>
       
        </div>
        <div className = "totalvalue">
          <h3 className="w3-center values" style= {{color: "white"}}>Core Values</h3>
          <div className= {Style.tags}>
            <p className= {Style.tag}>Excellence</p>
            <p className= {Style.tag}>Integrity</p>
            <p className= {Style.tag}>Impact</p>
            <p className= {Style.tag}>Service</p>
            <p className= {Style.tag}>Teamwork</p> 
            <p className= {Style.tag}>Inclusiveness</p>
          </div>
        </div>
      </div>
  </div>
</section>  


 {/* Donate, Partner and volunteer */}
<section id="donate">

  <div className="w3-container un0" id="details">
      <h3 className="w3-center un3">How can you help?</h3>

      <div className="container" style={{marginTop:"64px"}}>
        <div className="row">
          <div className="w3-col s4 helpdiv" >
            <div>
              <div className = "helpline">
                <i className="far fa-hand-paper w3-margin-bottom iconv"></i>
                <div style = {{lineHeight:" 0.5;"}}>
                  <h3>Volunteering</h3>
                </div>
              </div>
              <p style={{textAlign:"left"}}> You have the power to build people up,
                Your support can help young people positively influence their generation. <br />
                <i>"Alone we can do so little; together we can do so much"</i>

              </p>
              <a href = "#" className = {Style.helplink} >Volunteer</a>
            </div>
          </div>
  
          <div className="w3-col s4  helpdiv" >
            <div >
              <div className = "helpline">
                <i className="fas fa-donate w3-margin-bottom iconv" ></i>
                <div style = {{lineHeight: "0.5"}}>
                  <h3>Donation</h3>
                </div>
              </div>
              <p style={{textAlign:"left"}}> Help sponsor our events and programs via donation. 
                Create an impact and help reach thousands of people. <br /> <i>"There could
                be no definition of a successful life that does not include service to others"</i>
                
              </p>
              <a href = "https://dashboard.flutterwave.com/donate/nrsfxenl4oyz" className =  {Style.helplink} >Donate</a>
            </div>
          </div>
          
          <div className="w3-col s4  helpdiv" >
            <div>
              <div className = "helpline">
                <i className="far fa-handshake w3-margin-bottom iconv"></i>
                <div style = {{lineHeight: "0.5"}}>
                  <h3>Partnership</h3>
                </div>
              </div>
              <p style={{textAlign:"left"}}> Partner with our vision of people finding their 
                place in the world which brings the transformation we want.<br />
                <i>"Unity is strength; when there is partnership, we can achieve uncommon results"</i>
              </p>
              <a href = "#" className =  {Style.helplink }>Partner</a>
            </div>
          </div>

        </div>
        
        
      </div>
  </div>
</section> 



{/* Board Section */}
<section className="Waves" style = {{backgroundColor:"#e6eaf3"}}>
  <div className="w3-container" style= {{padding:"80px 16px 120px"}} id="team"> 
    <h3 className="w3-center un3">The Board</h3>
    <div className="w3-row-padding people" style= {{marginTop:"64px"}}>
    {/* Information on Marvellous */}
      <div className="w3-col l3 m6 w3-margin-bottom ">
        <Link href = "/marvellous"><a >
            <div className="w3-card whole ">
              <img className = "img" src="images/marvy.jpg" alt="" />
              <div className="w3-container text">
                <h4 className="w3-center un4"> Marvellous Sunmiboye</h4>
                <p className="w3-center">Director</p>
                
              </div>
            </div>
        </a></Link>
      </div>
                 
    {/* Information on Testimony */}
      <div className="w3-col l3 m6 w3-margin-bottom">
        <Link href = "/testimony"><a >
            <div className="w3-card whole">
              <img className = "img" src="images/test.jpg" alt="" />
              <div className="w3-container text">
                <h4 className="w3-center un4">Testimony Adebiyi</h4>
                <p className="w3-center">Administrator</p>
              
              </div>
            </div>
        </a></Link>
      </div>

    {/* Info for Eniola */}
      <div className="w3-col l3 m6 w3-margin-bottom">
          <Link href = "/eniola"><a >
              <div className="w3-card whole">
                <img className = "img" src="images/eniola.jpg" alt="" />
                <div className="w3-container text">
                  <h4 className="w3-center un4">Eniola Olasogba</h4>
                  <p className="w3-center">HEAD, Contents and Communications</p>
                 
                </div>
              </div>
          </a></Link>
      </div>


    {/* Info for sam */}
      <div className="w3-col l3 m6 w3-margin-bottom">
        <Link href = "/sam"><a> 
          <div className="w3-card whole">
            <img className = "img" src="images/sam.jpg" alt="" />
            <div className="w3-container text">
              <h4 className="w3-center un4">Samuel Adekunle</h4>
              <p className="w3-center">HEAD, Strategy and Logistics</p>
             
            </div>
          </div>
          </a></Link>
      </div>

    {/* Information on damilola daniel */}
      <div className="w3-col l3 m6 w3-margin-bottom">
        <Link href = "/damilola"><a >
            <div className="w3-card whole">
              <img className = "img" src="images/st.jpeg" alt="" />
              <div className="w3-container text">
                <h4 className="w3-center un4">Damilola Daniel</h4>
                <p className="w3-center">HEAD, Media</p>
              
              </div>
            </div>
        </a></Link>
      </div>

    {/* Information on doyinsolami */}
      <div className="w3-col l3 m6 w3-margin-bottom">
        <Link href = "/doyin"><a >
            <div className="w3-card whole">
              <img className = "img" src="images/doyin.jpg" alt="" />
              <div className="w3-container text">
                <h4 className="w3-center un4">Doyinsolami Olatunji</h4>
                <p className="w3-center">Deputy Head, Strategy and Logistics</p>
             
              </div>
            </div>
          </a></Link>
      </div>

    {/* Information on adesola oyewole */}
      <div className="w3-col l3 m6 w3-margin-bottom">
        <Link href = "/adesola"><a >
            <div className="w3-card whole">
              <img className = "img" src="images/adesola.jpg" alt="" />
              <div className="w3-container text">
                <h4 className="w3-center un4">Adesola Oyewole</h4>
                <p className="w3-center">Head, Finance</p>
              
              </div>
            </div>
        </a></Link>
      </div>

    </div>
  </div>
</section>
 
  

 {/* Contact Section  */}
<div className="w3-container w3-light-white" id="contact">
  <div className = {Style.cont}>
    <h2 className = "greet">Lets get in touch</h2>
    <button  className = "come greet">Say Hello</button>
  </div>
  
   {/* Register Modal  */}
   
  <div className={Style.contact1} className="w3-modal" >
    <div className="w3-modal-content w3-animate-zoom allow">
      <div className="w3-container us">
        <span className="w3-button w3-display-topright w3-large" ><h2 id = "xee">X</h2></span>
        <h1 style= {{color:"maroon"}}>Contact Us</h1>
      </div>
      <div id="formdiv">
        <form  action="/action_page.php" target="_blank" >
          <input className=" in w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" />
          
          <input className="in w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email" />
          
          <input className=" in w3-padding-16 w3-border"  type = "website" placeholder="Website(Optional)" /> 

          
          <input className=" in  w3-padding-16 w3-border" type="text" placeholder="Message" 
            required name="Message" />
          <button className={Style.button2} type="submit">Send <i className = "far fa-arrow-alt-circle-right"></i></button>
        </form>
      </div>
    </div>
  </div>
</div>


{/* Footer  */}
<div className="PD">
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
      <h3> <a href="https://www.instagram.com/the_sma__/"><i className="fab fa-instagram fa-1"></i></a>Instagram</h3>
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
    @media screen and (max-width:900px){
        .w3-hide-small{
          display:none;
        }
   

    }
    @media screen and (max-width:800px){
      .pause{
        float:none;
        margin:0 auto;
      }
 

  }
    @media screen and (max-width:600px){
      .w3-col{
        float:none;
        margin:0 auto;
      }
      .mission{
        padding-top:20px;
      }

  }
 
  .w3-card{
    box-shadow:0 10px 10px -5px rgba(0,0,0,0.16);
  }
   
  .h4{
    margin-bottom:5px;
  }
    .people{
      text-align:center;
    }
    .fa-bars {
      font-size:25px;
      margin:10px 10px 0px;
      
    }
  
    .mug{
      border-radius:50%;
      padding:8px 16px;
 
    }
     div.PD{
      margin-bottom: -9px;
      }
    .img{
      width:100%;
      border-radius:50% 50% 0% 0%;
    }
    .values {
      padding: 35px 0px 20px;
      font-size: 19px;
    }
    .un0{
      padding:128px 16px;
      padding-left:30px;
    }
    .un1{
      color:white;
      text-align:center;
    }
    .un2{
      color:white;
      text-align:left;
    }
    .un3{
      font-family: 'Roboto Slab', serif;
      font-size:30px;
    }
    .un4{
      font-family: 'Noto Serif JP', serif;
      
    }
     .body, html {
       height: 100%;
       line-height: 1.8;
     }
   
     .network{
       color:white;
       font-family: 'Roboto Slab', serif;
     }
     .image{
         width: "800px";
        height:"700px";
     }
    
     .text{
       background-color:white;
     }
     .whole:hover .text{
      background:rgb(91,5,5);
     }
     .whole:hover .text {
       color:white;
     }
     a{
         color:black;
         cursor:pointer;
     }
     
     /*image header */
      
     .w3-bar .w3-button {
       padding: 18px;
     }
     .xee{
       padding:10px;
       color:white;
       margin-left:30px;
       
     }
     
     a:hover{
       text-decoration: none;
     }
    
     .xee,.w3-button{
       transition:background 0.5s;
       
     }
     .speech > h3{
       margin-top:100px;
     }
     @media screen and (max-width:800px){
       .speech > h3{
       margin-top:20px;
     }
     }
    
     
    `}</style>
    </div>
  )
}




