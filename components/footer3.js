import Style from "../styles/index.module.css";
import {  FaTwitter, FaInstagram, FaFacebookF,FaPhoneAlt } from 'react-icons/fa';
import {IoArrowUpCircleSharp} from 'react-icons/io5';


export default function Footer(){
    return(
        <>
        
        <footer className="bg-gray-200 w3-padding-16" id = "contact">
          <div className = {Style.footer}>
            <div className = {Style.foot}>
              <div className = "first">
                <h3 className = "text-base  text-gray-800">Location, Ilorin branch</h3>
                
                  <p className = "text-sm "  style = {{color:'#1f2937 ' }}>
                  University Road, Tanke, <br />
                  Ilorin, Kwara State
                  </p>
              
              </div>
              <div className = "first text-gray-800">
                <h3 className = "text-base ">Location, ILe- Ife branch</h3>
              
                  <p className = "text-sm " style = {{color:'#1f2937'}}>
                  Obafemi Awolowo University,  <br /> Ile-Ife,
                  Osun State
                  </p>
              
              
              </div>
            </div>
            <div className = "first lew">
              <h3 className = "text-base  text-gray-800">Contact us</h3>
              <div>
             <h4 className = "text-sm  text-gray-800">Marvellous (Director)</h4>
             <div className = "flex items-center text-sm " style = {{color:'#1f2937'}}>
                <FaPhoneAlt/> 
                <p className = "pl-2  " style = {{color:'#1f2937'}}>  +234 814 529 3779</p>
             </div>
                
              </div>
              <div>
                <h4 className = "text-sm  text-gray-800">Elizabeth (Communications)</h4>
                <div className = "flex items-center text-sm" style = {{color:'#1f2937'}}>
                  <FaPhoneAlt/> 
                  <p className = "pl-2 " style = {{color:'#1f2937'}}> +234 816 958 2279</p>
                </div>
               
              </div>
              
            </div>
          </div>
          <div className = "flex justify-center  mt-6 cursor-pointer">
                <span className = " text-xl  text-gray-800" ><a  href="https://twitter.com/TheSMA_Impact?s=09"><FaTwitter /></a></span>
                <span className = " text-xl  text-gray-800 ml-4"><a  href="https://www.instagram.com/the_sma__/"><FaInstagram/></a></span>
                <span className = " text-xl text-gray-800 ml-4"><a   href="https://www.facebook.com/The-S-M-A-Impact-Network-108033684355867/"><FaFacebookF/></a></span>
          </div>
       
        </footer>
        <div className = 'bg-gray-200 text-center overflow-y-hidden' >
        <a
          href="#top"
          style={{ color: '#1f2937'}}
          className = "text-3xl pb-10"
        >
          <span><IoArrowUpCircleSharp className = "inline" /></span>
        </a>
        <p className={Style.lil} >
          <span className = ' text-gray-800' className = "text-sm">
            &copy; 2021, SMA Impact Network
          </span>
        </p>
      </div>
        </>
        
    )

}