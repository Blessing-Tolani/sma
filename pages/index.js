import Head from "next/head";
import Link from "next/link";
import Style from "../styles/index.module.css";
import React, { useState, useRef, useEffect } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaRegHandPaper, FaDonate, FaRegHandshake } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 2 },
];

export default function Fullpage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const headerRef = useRef(null);
  const image1Ref = useRef(null);
  const speechRef = useRef(null);
  const homeRef = useRef(null);
  const normRef = useRef(null);
  const informRef = useRef(null);
  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const helpRef = useRef(null);
  const helpdiv1Ref = useRef(null);
  const helpdiv2Ref = useRef(null);
  const helpdiv3Ref = useRef(null);
  const boardRef = useRef(null);
  const teeRef = useRef(null);
  const contactRef = useRef(null);
  const slimRef = useRef(null);

  // gsap  animation
  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -40,
      duration: 3,
    });

    gsap.from(normRef.current, {
      y: 20,
      duration: 3,
    });

    gsap.fromTo(
      speechRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        ease: "power2.out",
        y: 0,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: speechRef.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
          end: "bottom top",
        },
      }
    );

    gsap.fromTo(
      image1Ref.current,
      {
        opacity: 0,
      },
      {
        ease: "power2.out",
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: image1Ref.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
          end: "bottom top",
        },
      }
    );

    gsap.fromTo(
      [informRef.current, aboutRef.current],
      {
        opacity: 0,
      },
      {
        ease: "power2.out",
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: informRef.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
          end: "bottom top",
        },
      }
    );

    gsap.fromTo(
      visionRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        ease: "power2.out",
        duration: 2,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: visionRef.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      missionRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        ease: "power2.out",
        duration: 2,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: missionRef.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      valuesRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        ease: "power2.out",
        duration: 2,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: valuesRef.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      helpRef.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        ease: "power2.out",
        duration: 2,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: helpRef.current,
          toggleActions: "play none none reverse",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      helpdiv1Ref.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: helpdiv1Ref.current,
          toggleActions: "play none none reverse",
          start: "top 80%",
          ease: "elastic",
          force3D: true,
        },
      }
    );

    gsap.fromTo(
      helpdiv2Ref.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: helpdiv2Ref.current,
          toggleActions: "play none none reverse",
          start: "top 80%",
          ease: "elastic",
          force3D: true,
        },
      }
    );

    gsap.fromTo(
      helpdiv3Ref.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: helpdiv3Ref.current,
          toggleActions: "play none none reverse",
          start: "top 80%",
          ease: "elastic",
          force3D: true,
        },
      }
    );

    gsap.fromTo(
      boardRef.current,
      {
        opacity: 0,
      },
      {
        ease: "power2.out",
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: boardRef.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <div className="body">
      <Head>
        <title>SMA Impact Network</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Noto+Serif+JP&&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia&family=Roboto+Condensed:wght@700&family=Roboto+Slab&family=Lato:ital@1&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className="w3-top " id="home" ref={homeRef}>
        <div className={Style.textdiv}>
          <div className={Style.norm} ref={normRef}>
            <h3>
              We Help People
              <br /> Build Capacity to Influence Their World
            </h3>
            <p>
              Everyone has potentials for influence and it can be developed
              under the right atmosphere
            </p>
          </div>
        </div>
        <div
          className="myNavBar px-8 w-full flex flex-row justify-between items-center "
          style={{ boxShadow: "none" }}
        >
          <div className="hhh">
            <img className={Style.pub} src="images/loog2.png" />
          </div>

          <div className="w3-hide-small ">
            <a href="#" className="w3-bar-item w3-button xee ">
              {" "}
              Home
            </a>
            <a href="#about" className="w3-bar-item w3-button  xee">
              {" "}
              About
            </a>
            <a href="/works/programs" className="w3-bar-item w3-button xee">
              {" "}
              Programs
            </a>
            <a href="/entertainment/blog" className="w3-bar-item w3-button xee">
              {" "}
              Blog
            </a>
            <a
              href="/entertainment/gallery"
              className="w3-bar-item w3-button xee"
            >
              {" "}
              Gallery
            </a>
            <a href="#donate" className="w3-bar-item w3-button xee">
              {" "}
              Donate
            </a>
            <a href="#contact" className="w3-bar-item w3-button xee">
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
              href="#"
              onClick={toggleMenu}
              className="w3-button w3-hover-white"
              style={{ width: "100%", color: "white" }}
            >
              <p>Home</p>
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="w3-button w3-hover-white"
              style={{ width: "100%", color: "white" }}
            >
              <p> About</p>
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
              href="#donate"
              onClick={toggleMenu}
              className="w3-button w3-hover-white"
              style={{ width: "100%", color: "white" }}
            >
              <p>Donate</p>
            </a>
            <a
              href="#getinTouch"
              onClick={toggleMenu}
              className="w3-button  w3-hover-white"
              style={{ width: "100%", color: "white" }}
            >
              <p>Contact</p>
            </a>
          </nav>
        </span>
      </div>

      <header ref={headerRef} className={Style.bgimg}></header>

      {/* Director's Biography */}
      <div className="w3-container article">
        <div className="w3-row-padding ">
          <div className="w3-col s6 speech" ref={speechRef}>
            <h3 className={Style.heady}>
              <span className="doob">Director</span>
            </h3>
            <p className={Style.welcome} id="help">
              <span className="doob">
                {" "}
                Hello! My name is Marvellous Ayomide Sunmiboye{" "}
              </span>
              <br />
              <span className="doob">
                Welcome to our online space. This organization has a passion to
                see young people grow to a{" "}
              </span>{" "}
              <span className="doob">
                place where they are accurately built to begin to positively
                influence{" "}
              </span>{" "}
              <span className="doob">
                and impact their local environment and furthermore, creating
                relevance for themselves.{" "}
              </span>
              <span className="doob">
                I for one believe that if every one is given to accurate
                building, mentorship and capacity building, the "future" we have
                always spoken about would be nearer than we think.{" "}
              </span>
              <br />
              <span className="doob">
                It's Growth, it's Impact, it's Relevance.
              </span>{" "}
              <br />
              <span className="doob">Welcome to the Future.</span>
            </p>
            <p className={Style.welcome}> </p>
          </div>
          <div className="w3-col m6 pause  " ref={image1Ref}>
            <img
              className="w3-image w3-round-large bioimage1"
              src="images/teamwork.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <section
        id="information"
        style={{ backgroundColor: "black" }}
        ref={informRef}
      >
        <div className="w3-container un0" id="about">
          <h3 className="w3-center network" ref={aboutRef}>
            About the Network
          </h3>

          <div className="container" style={{ marginTop: "64px" }}>
            <div className="row">
              <div
                className="col-sm-6 vision"
                style={{ textAlign: "center" }}
                ref={visionRef}
              >
                <i
                  className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"
                  style={{ color: "#FED700" }}
                ></i>
                <p className="w3-large un1">Vision</p>
                <p className="un2">
                  {" "}
                  To see a community, nation, world where every young person
                  finds their place and begin to influence their environment
                  positively.
                </p>
              </div>

              <div
                className="col-sm-6 mission"
                style={{ textAlign: "center" }}
                ref={missionRef}
              >
                <i
                  className="fa fa-heart w3-margin-bottom w3-jumbo"
                  style={{ color: "#FED700" }}
                ></i>
                <p className="w3-large" style={{ color: "white" }}>
                  Mission
                </p>
                <p className="un2">
                  {" "}
                  To build, challenge, enlighten and equip young people to
                  become the best they can through strategic programs and
                  platforms that impact would no longer be a scarce thing in a
                  generation.
                </p>
              </div>
            </div>
            <div className="totalvalue" ref={valuesRef}>
              <h3 className="w3-center values" style={{ color: "white" }}>
                Core Values
              </h3>
              <div className={Style.tags}>
                <p className={Style.tag}>Excellence</p>
                <p className={Style.tag}>Integrity</p>
                <p className={Style.tag}>Impact</p>
                <p className={Style.tag}>Service</p>
                <p className={Style.tag}>Teamwork</p>
                <p className={Style.tag}>Inclusiveness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate, Partner and volunteer */}
      <section id="donate">
        <div className="w3-container un0" id="details">
          <h3 className="w3-center un3" ref={helpRef}>
            How can you help?
          </h3>

          <div className="container" style={{ marginTop: "64px" }}>
            <div className="row">
              <div className="w3-col s4 helpdiv " ref={helpdiv1Ref}>
                <div className="flex items-center">
                  <div>
                    <div className="helpline ">
                      <span className="iconv text-xl">
                        {" "}
                        <FaRegHandPaper />
                      </span>

                      <div style={{ lineHeight: " 0.5" }}>
                        <h3>Volunteering</h3>
                      </div>
                    </div>
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      You have the power to build people up, Your support can
                      help young people positively influence their generation.{" "}
                      <br />
                      <i>
                        "Alone we can do so little; together we can do so much"
                      </i>
                    </p>
                    <a href="/works/volunteer" className={Style.helplink}>
                      Volunteer
                    </a>
                  </div>
                </div>
              </div>

              <div className="w3-col s4  helpdiv" ref={helpdiv2Ref}>
                <div className=" flex items-center">
                  <div>
                    <div className="helpline">
                      <span className=" iconv text-xl">
                        <FaDonate />
                      </span>

                      <div style={{ lineHeight: "0.5" }}>
                        <h3>Donation</h3>
                      </div>
                    </div>
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      Help sponsor our events and programs via donation. Create
                      an impact and help reach thousands of people. <br />{" "}
                      <i>
                        "There could be no definition of a successful life that
                        does not include service to others"
                      </i>
                    </p>
                    <a
                      href="https://dashboard.flutterwave.com/donate/nrsfxenl4oyz"
                      className={Style.helplink}
                    >
                      Donate
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="w3-col s4 helpdiv flex items-center"
                ref={helpdiv3Ref}
              >
                <div className=" flex items-center">
                  <div>
                    <div className="helpline">
                      <span className="iconv text-xl">
                        {" "}
                        <FaRegHandshake />
                      </span>

                      <div style={{ lineHeight: "0.5" }}>
                        <h3>Partnership</h3>
                      </div>
                    </div>
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      Partner with our vision of people finding their place in
                      the world which brings the transformation we want.
                      <br />
                      <i>
                        "Unity is strength; when there is partnership, we can
                        achieve uncommon results"
                      </i>
                    </p>
                    <a href="/works/partnership" className={Style.helplink}>
                      Partner
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <div
        className="w3-container"
        style={{ backgroundColor: "#e6eaf3" }}
        ref={boardRef}
      >
        <div>
          <h2 className="text-center pt-4" ref={teeRef}>
            Board
          </h2>
        </div>

        <Carousel breakPoints={breakPoints} />
      </div>

      {/* Contact Section  */}

      <div className="w3-container " id="getinTouch" ref={contactRef}>
        <div className={Style.cont} ref={slimRef} id="gome">
          <h2 className="greet">Lets get in touch</h2>
          <button className="come greet" onClick={toggleModal}>
            Say Hello
          </button>
        </div>

        {/* Register Modal  */}
        <div className={`${modalIsOpen ? "open" : "closed"} ...rest`}>
          <div className="w3-modal flex">
            <div className="w3-modal-content w3-animate-zoom allow">
              <div className="w3-container us">
                <span className="w3-button w3-display-topright w3-large">
                  <h3
                    id="xee"
                    style={{ color: "maroon" }}
                    onClick={toggleModal}
                  >
                    X
                  </h3>
                </span>
                <h3 style={{ color: "maroon", textAlign: "center" }}  className = "pt-6">
                  Contact Us
                </h3>
              </div>
              <div id="formdiv" >
                <form
                  action="/success"
                  method="POST"
                  data-netlify="true"
                  name="Contact Form"
                >
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <input
                    className=" in w3-padding-16"
                    type="text"
                    placeholder="Full name"
                    required
                    name="Full name"
                  />

                  <input
                    className="in w3-padding-16 "
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                    pattern="^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([A-Za-z]{3})$"
                  />

                  <input
                    className="in w3-padding-16 "
                    type="number"
                    name="Phone Number "
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    className="in w3-padding-16 "
                    type="text"
                    name="Location"
                    placeholder="Location (City and Country)"
                    required
                  />
                  <div className = " flex justify-center mb-8">
                  <textarea
                    placeholder="Message"
                    name="Message"
                    required
                  ></textarea>
                  </div>
                 

                  <button className={Style.button2} type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}

      <Footer />

      <style jsx>{`
       .w3-modal-content {
        padding: 15px 0px;
      
      }
      .burger {
        background-color: #c0c0c0 !important;
       
      }
      .us > h3 {
        font-family: 'Sofia';
        letter-spacing: 1px;
       
        color: black;
      }
      .myNavBar{
        height:100px;
       
      }
   
        #gome {
          padding-top: 10%;
        }
        .w3-button {
          color: white !important;
        
        }

        input {
          width: 500px;
          height: 50px;
          background-color: #f3f3f3;
          border-radius: 0.6em;
          padding: 20px;
          font-size: 14px;
          color: #053d59;
          font-family: "ABeeZee";
        }
        textarea {
          
          color: #053d59;
          font-family: "ABeeZee";
          background-color: #f3f3f3;
          padding: 20px;
          width: 500px;
          height: 130px;
          font-size: 14px;
          border-radius: 0.6em;
          margin:0 auto;
      }
        .imgdiv {
          width: 80%;
        }
        .whole {
          width: 100%;
        }
        .w3-modal {
         
          padding-top: 0px;
        }
      
        .w3-button:hover {
          color: #c0c0c0 !important;
          background-color: transparent !important;
        }
        @media screen and (min-width: 900px) {
          .w3-hide-large {
            display: none !important;
          }
        }
        
        @media screen and (max-width: 900px) {
          .w3-hide-small {
            display: none !important;
          }
        
          .w3-hide-large{display:flex!important}} 
        }
        @media screen and (max-width: 800px) {
          .pause {
            float: none;
            margin: 0 auto;
          }
          input , textarea{
            width: 80%;
          }
        }
        @media screen and (max-width: 600px) {
          .w3-col {
            float: none;
            margin: 0 auto;
          }
          .mission {
            padding-top: 20px;
          }
          .w3-modal {
            padding-top: 70px;
            display: block;

            }
        }

     

        .h4 {
          margin-bottom: 5px;
        }
        .people {
          text-align: center;
        }
        .fa-bars {
          font-size: 25px;
          margin: 10px 10px 0px;
        }

        div.PD {
          margin-bottom: -9px;
        }
        .img {
          width: 100%;
          border-radius: 50% 50% 0% 0%;
        }
        .values {
          padding: 35px 0px 20px;
          font-size: 19px;
        }
        .un0 {
          padding: 128px 16px;
          padding-left: 30px;
        }
        .un1 {
          color: white;
          text-align: center;
        }
        .un2 {
          color: white;
          text-align: left;
        }
        .un3 {
          font-family: "Roboto Slab", serif;
          font-size: 30px;
        }
        .un4 {
          font-family: "Noto Serif JP", serif;
        }
        .body,
        html {
          height: 100%;
          line-height: 1.8;
        }

        .network {
          color: white;
          font-family: "Roboto Slab", serif;
        }
        .image {
          width: "800px";
          height: "700px";
        }

        .text {
          background-color: white;
        }
        .whole:hover .text {
          background: rgb(91, 5, 5);
        }
        .whole:hover .text {
          color: white;
        }
        a {
          color: black;
          cursor: pointer;
        }

        /*image header */

        .w3-bar .w3-button {
          padding: 18px;
        }
        .xee {

          margin-left: 20px;
        }

        .xee,
        .w3-button {
          transition: background 0.5s;
        }
        .speech > h3 {
          margin-top: 100px;
        }
        @media screen and (max-width: 800px) {
          .speech > h3 {
            margin-top: 20px;
          }
        }
        @media screen and (max-width: 400px) {
          .imgdiv {
            width: 100%;
          }
          .un4,
          .un5 {
            font-size: 15px;
          }
          un3 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
