import Style from "../styles/index.module.css";
import {  FaTwitter, FaInstagram, FaFacebookF,FaPhoneAlt } from 'react-icons/fa';
import {IoArrowUpCircleSharp} from 'react-icons/io5';


export default function Footer(){
    return(
        <>
        <div className="PD ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill=""
                fillOpacity="1"
                d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,213.3C1120,213,1280,267,1360,
            293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
            </svg>
        </div>

        <footer className="w3-black w3-padding-16" id = "contact" >
          <div className = {Style.footer}>
            <div className = {Style.foot}>
              <div className = "first">
                <h3 className = "text-base">Location, Ilorin branch</h3>
                
                  <p className = "text-sm">
                  University Road, Tanke, <br />
                  Ilorin, Kwara State
                  </p>
              
              </div>
              <div className = "first">
                <h3 className = "text-base">Location, ILe - Ife branch</h3>
              
                  <p className = "text-sm">
                  Obafemi Awolowo University,  <br /> Ile-Ife,
                  Osun State
                  </p>
              
              
              </div>
            </div>
            <div className = "first lew">
              <h3 className = "text-base">Contact us</h3>
              <div>
             <h4 className = "text-sm">Marvellous (Director)</h4>
             <div className = "flex items-center text-sm">
                <FaPhoneAlt/> 
                <p className = "pl-2"> +234 816 958 2279</p>
             </div>
                
              </div>
              <div>
                <h4 className = "text-sm">Elizabeth (Communications)</h4>
                <div className = "flex items-center text-sm">
                  <FaPhoneAlt/> 
                  <p className = "pl-2">+234 814 529 3779</p>
                </div>
               
              </div>
              
            </div>
          </div>
          <div className = "flex justify-center  mt-6 cursor-pointer">
                <span className = " text-xl" ><a style = {{color:'#a9a9a9'}}  href="https://twitter.com/TheSMA_Impact?s=09"><FaTwitter /></a></span>
                <span className = " text-xl  ml-4"><a  style = {{color:'#a9a9a9'}} href="https://www.instagram.com/the_sma__/"><FaInstagram/></a></span>
                <span className = " text-xl  ml-4"><a  style = {{color:'#a9a9a9'}} href="https://www.facebook.com/The-S-M-A-Impact-Network-108033684355867/"><FaFacebookF/></a></span>
          </div>
       
        </footer>
        <div className = 'text-center bg-black overflow-y-hidden' >
        <a
          href="#top"
          style={{ color: '#a9a9a9'}}
          className = "text-3xl mb-14"
        >
          <span><IoArrowUpCircleSharp className = "inline" /></span>
        </a>
        <p className={Style.lil}>
          <span  style={{ color: "#a9a9a9" }} className = "text-sm">
            &copy; 2021, SMA Impact Network
          </span>
        </p>
      </div>
        </>
        
    )

}