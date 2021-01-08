import Head from 'next/head'
import Link from 'next/link'
import Style from '../styles/index.module.css'



export default function SamInfo() {
  return (
    <div>
        <Head>
            <title>Samuel Adekunle</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Source+Sans+Pro&family=Playfair+Display&display=swap" rel="stylesheet" />
            <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Head>

        <div className="w3-top">
            <div className="w3-bar w3-black w3-card" id="myNavbar">
            
            
                <div className="w3-right w3-hide-small">
                    <Link href="#"><a  className="w3-bar-item w3-button xee"> Home</a></Link>
                    <Link href="#"><a  className="w3-bar-item w3-button xee"> Programs</a></Link>
                    <Link href="#"><a  className="w3-bar-item w3-button xee"> Blog</a></Link>
                    <Link href="#"><a  className="w3-bar-item w3-button xee"> Gallery</a></Link>

                    <a href="#" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium betty">
                        <i className="fa fa-bars text-color-white"></i>
                    </a>
                </div>
            
                <nav className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-hide-medium w3-hide-large w3-center" id="mySidebar">
                    <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button "><h2 id = "xee">X</h2></a>
                    <Link href="index.js"><a  onclick="w3_close()" className="w3-button w3-hover-black w-full" ><p>Home</p></a></Link>
                    <Link href="#"><a  onclick="w3_close()" className="w3-button w3-hover-black w-full" ><p>Programs</p></a></Link><br />
                    <Link href="#"><a  onclick="w3_close()" className="w3-button w3-hover-black w-full" ><p>Blog</p></a></Link><br />
                    <Link href="#"><a  onclick="w3_close()" className="w3-button w3-hover-black w-full" ><p>Gallery</p></a></Link><br />
                  
                </nav>
            </div>
        </div>


        
        <div className="w3-container bg-gray-200" >
            <div className="w3-col m6  flex justify-center">
                <img className = " w-2/3  sm:w-1/2 lg:w-2/3 rounded-full" src="/images/sam.jpg" alt="" />
            
            </div>
            <div className="w3-col m6 ">
                <div className = " text-center pt-12 bow">
                    
                    <h3 className = "id text-2xl font-semibold">Samuel Adekunle</h3>
                    <p className = "id2 text-xl py-2">HEAD, Strategy and Logistics</p>
                    <p className = "id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">Adekunle Samuel is a 3rd year Biochemistry student 
                    at the University of Ilorin.
                    He is an ardent learner and a personal development advocate.
                        Samuel is a copywriter and researcher. He is passionate about health care and cancer biology.
                        He loves traveling, reading and playing computer games. Samuel's favorite colour is blue. 
                        He has a penchant for changing lives, he is involved in Networks and Foundations that 
                        evidently seek to impact lives.


                    </p>
                    <div className = "text-lg lg:text-xl pt-2">
                    <a href = "https://mobile.twitter.com/s_samyjay"><i class="fab hover:text-gray-900 fa-twitter "></i></a>
                    <a href = "https://www.instagram.com/samyjjay/"><i class="fab hover:text-gray-900 fa-instagram "></i></a>
                    <a href = " https://www.linkedin.com/in/samuel-adekunle-0b03b4198"><i class="fab hover:text-gray-900 fa-linkedin "></i></a>
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
        .betty, #mySidebar{
            display:none;
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