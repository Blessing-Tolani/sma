import Style from "../styles/index.module.css";


export default function Footer(){
    return(
        <>
        <div className="PD ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill=""
                fill-opacity="1"
                d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,213.3C1120,213,1280,267,1360,
            293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
            </svg>
        </div>

        <footer className="w3-black w3-padding-64">
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
        </>
        
    )

}