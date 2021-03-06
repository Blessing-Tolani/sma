import Head from "next/head";
import Style from "../../styles/index.module.css";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer";
import Upsurge from "../../components/Upsurge-form";
import Ignition from "../../components/Ignition-form";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Program() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const [IgnitionmodalIsOpen, setIgnitionModalIsOpen] = useState(false);
  const toggleIgnitionModal = () =>
    setIgnitionModalIsOpen(!IgnitionmodalIsOpen);
  const headerRef = useRef(null);
  const normRef = useRef(null);
  const whatRef = useRef(null);
  const imgRef = useRef(null);
  const progRef = useRef(null);
  const peeRef = useRef(null);
  const img1Ref = useRef(null);
  const p1Ref = useRef(null);
  const img2Ref = useRef(null);
  const p2Ref = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -40,
      duration: 3,
    });

    gsap.fromTo(
      normRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 3,
      },
      {
        opacity: 1,
      }
    );
    gsap.fromTo(
      whatRef.current,
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
          trigger: whatRef.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
          end: "bottom top",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        ease: "power2.out",
        y: 0,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: whatRef.current,
          start: "top 70%",
          end: "bottom top",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      peeRef.current,
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
          trigger: progRef.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
          end: "bottom top",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      p1Ref.current,
      {
        opacity: 0,
        x: -30,
      },
      {
        ease: "power2.out",
        x: 0,
        duration: 2,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: progRef.current,
          toggleActions: "play none none reverse",
          start: "top 60%",
          end: "bottom top",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      img1Ref.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        ease: "power2.out",
        x: 0,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: progRef.current,
          toggleActions: "play none none reverse",
          start: "top 60%",
          end: "bottom top",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      p2Ref.current,
      {
        opacity: 0,
        x: 30,
      },
      {
        ease: "power2.out",
        x: 0,
        duration: 2,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: p2Ref.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
          end: "bottom top",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      img2Ref.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        ease: "power2.out",
        x: 0,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: img2Ref.current,
          toggleActions: "play none none reverse",
          start: "top 70%",
          end: "bottom top",
        },
      }
    );
  }, []);

  return (
    <div className="body">
      <Head>
        <title>What We Do</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Pacifico&family=Noto+Serif+JP&&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia&family=Old+Standard+TT&family=Roboto+Condensed:wght@700&family=Roboto+Slab&family=Lato:ital@1&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className="w3-top " id="home">
        <div className={Style.textdiv} id="toppo">
          <div className={Style.norm3} ref={normRef}>
            <h3 className="over">GROWTH, IMPACT, RELEVANCE</h3>
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
          <div className={Style.norm2}>
            <img className={Style.pub} src="/images/loog2.png" />
          </div>

          <div className="w3-hide-small ">
            <a href="/" className="w3-bar-item w3-button xee ">
              {" "}
              Home
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
              href="/"
              onClick={toggleMenu}
              className="w3-button w3-hover-white"
              style={{ width: "100%", color: "white" }}
            >
              <p>Home</p>
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
              href="#contact"
              onClick={toggleMenu}
              className="w3-button  w3-hover-white"
              style={{ width: "100%", color: "white" }}
            >
              <p>Contact</p>
            </a>
          </nav>
        </span>
      </div>

      <header
        className="bgimg-1 w3-display-container w3-grayscale-min rounded-bl-full "
        ref={headerRef}
      >
        <img ref={imgRef} className="star " src="/images/Star.svg" alt="" />
      </header>
      <div className="w3-container" ref={whatRef}>
        <div className="fix  w-full">
          <div className="w3-col m6 flex pt-8 sm:pt-14 lg:pt-0 justify-center items-center ">
            <div className="beyhead  lg:pl-32">
              <h1 className=" bey text-gray-500 ">What</h1>
              <h1 className="bey text-gray-500 pl-2 lg:pl-0">We</h1>
              <h1 className="bey text-gray-500 pl-2 lg:pl-0">Do</h1>
            </div>
          </div>
          <div className="w3-col m6 px-0  sm:pr-20 pt-0 sm:px-12 lg:px-0 lg:pt-16 why">
            <p className="add">
              <img src="/images/dot1.svg" className="inline pr-2" /> We hold
              capacity building conferences, seminar and webinars{" "}
            </p>
            <p className="add">
              <img src="/images/dot2.svg" className="inline pr-2" /> We train
              young ones on social impact, social entrepreneurship and community
              influence
            </p>
            <p className="add">
              <img src="/images/dot3.svg" className="inline pr-2" /> We train
              (our members and volunteers) on key issues pertaining to Impact,
              Relevance and Influence{" "}
            </p>
            <p className="add">
              {" "}
              <img src="/images/dot4.svg" className="inline pr-2" /> We train
              secondary school students on Career Pathway and Development,
              Financial Intelligence and the need for early social impact
            </p>
            <p className="add">
              {" "}
              <img src="/images/dot5.svg" className="inline pr-2" /> We organize
              social/ community outreaches in a bid to reach out to people in
              need as touching different areas of influence
            </p>
          </div>
        </div>
      </div>
      <div className="w3-container mt-12 lg:mt-14 " ref={progRef}>
        <div>
          <h1
            className="pro md:30px; text-gray-500 text-center pb-2 sm:pb-8"
            ref={peeRef}
          >
            Our Programs
          </h1>
        </div>
        <div className="w3-col s9 cop  flex items-center  pl-0 sm:pl-10 md:pl-20">
          <img
            className="crop rounded-r-full"
            src="/images/up.jpg"
            ref={img1Ref}
          />
          <p
            className="pl-2 sm:pl-10 pr-4 sm:pr-10 md:pr-20 lg:pr-4 text-gray-900 pt-6 lg:pt-0 "
            ref={p1Ref}
          >
            <b> UPSURGE</b>
            <br />
            An online personal development and self activation conference that
            centres on helping participants gain mastery over specific spheres
            of life. This program centers on grooming individuals with relevant
            information necessary for development in the area of concerns
            discussed. Over the months, UPSURGE has trained over 100 young
            individuals on different spheres of influence. Previous editions
            have paid attention to Self Awareness, Journey to Purpose Discovery,
            Career Development, Entrepreneurship to mention a few.
            <div className="mt-2">
              <button id="button" className="onebutton" onClick={toggleModal}>
                Register
              </button>
            </div>
          </p>
        </div>
        {/* Upsurge Modal  */}
        <div className={`${modalIsOpen ? "open" : "closed"} ...rest`}>
          <div className="w3-modal flex justify-center items-center">
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
                <h3 style={{ textAlign: "center" }} className="pt-6">
                  Register for Upsurge
                </h3>
              </div>
              <Upsurge />
            </div>
          </div>
        </div>

        <div className="w3-col s9 flew  cop  flex items-center lg:pr-20 mt-10 ">
          <p
            className="lg:pr-10 pl-0 sm:pl-10 sm:pr-16 lg:pl-8 text-gray-900 pt-6 lg:pt-10"
            ref={p2Ref}
          >
            <b>IGNITION</b>
            <br />A conference that that is set to build and equip SECONDARY
            SCHOOL STUDENTS to be relevant in their local environment and
            spheres of influence The Network believes in the "Catch Them Young"
            strategy. Hence, this conference is designed to IGNITE these young
            students into personal and community development, early enough. This
            program emphasizes on extra-curricular informations like Emotional
            Intelligence, Self Hack, Community Influence, Financial
            Intelligence, Advocacy and many other areas as a strategy of
            building these students to become effective changemakers in their
            local communities and the world at large.
            <div className="mt-2">
              <button
                id="button"
                className="onebutton"
                onClick={toggleIgnitionModal}
              >
                Register
              </button>
            </div>
          </p>

          <img
            className="crop rounded-l-full bom"
            src="/images/ignite.jpg"
            ref={img2Ref}
          />
        </div>
        {/* Ignition Modal  */}
        <div className={`${IgnitionmodalIsOpen ? "open" : "closed"} ...rest`}>
          <div className="w3-modal flex justify-center items-center">
            <div className="w3-modal-content w3-animate-zoom allow">
              <div className="w3-container us">
                <span className="w3-button w3-display-topright w3-large">
                  <h3
                    id="xee"
                    style={{ color: "maroon" }}
                    onClick={toggleIgnitionModal}
                  >
                    X
                  </h3>
                </span>
                <h3 style={{ textAlign: "center" }} className="pt-6">
                  Register for Ignition
                </h3>
              </div>
              <Ignition />
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .us > h3 {
          font-family: "Sofia";
          letter-spacing: 1px;

          color: black;
        }
        #formdiv {
          width: 90%;
          margin: 0 auto;
        }

        .w3-modal {
          padding-top: 0px;
        }
        @media screen and (min-width: 900px) {
          .w3-modal-content {
            padding: 20px 0px;
            width: 800px;
          }
        }
        @media screen and (max-width: 900px) {
          .w3-modal-content {
            padding: 20px 0px;
            width: 90%;
          }
        }

        .onebutton {
          margin: 0 auto;
          font-family: "ABeeZee";
          color: #053d59;
          font-size: 15px;
          padding: 6px 19px;
          border-top: 1px solid #053d59;
          border-right: 1px solid #053d59;
          border-bottom: 1px solid #053d59;
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
        }
        .onebutton:hover,
        .onebutton:focus {
          border-top: 1px solid #808080;
          border-right: 1px solid #808080;
          border-bottom: 1px solid #808080;
          color: #808080;
        }

        .w3-button:hover,
        .w3-button:focus {
          color: #c0c0c0 !important;
          background-color: transparent !important;
        }
        .block {
          display: block;
        }
        .boye {
          padding: 10px 80px 0px 0px;
        }
        .pro {
          font-family: "Pacifico", cursive;
        }
        .beyhead {
          display: flex;
          flex-direction: column;
          margin-left: 40px;
        }
        .text-gray-900 {
          font-family: "Old Standard TT", serif;
        }
        .cop b {
          font-size: 18px;
        }
        .fix {
          display: flex;
          flex-direction: row;
          justify-content: around;
        }
        .star {
          position: absolute;
          bottom: 0;
          z-index: 30;
        }

        .crop {
          width: 400px;
          height: 300px;
        }
        .flew {
          float: right;
        }
        .add {
          font-family: "Source Sans Pro", sans-serif;
        }
        .bey {
          font-family: "Pacifico", cursive;
          margin-left: 25px;
        }

        @keyframes zoominout {
          from {
            transform: scale(0.2);
          }
          to {
            transform: scale(0.8);
          }
        }
        .inline {
          animation: zoominout 4000ms infinite alternate;
        }
        .norm {
          background-color: none;
        }
        .why p {
          padding-bottom: 20px;
        }

        .xee {
          padding: 10px;
          color: white;
          margin-left: 30px;
        }
        .bgimg-1 {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3)
            ),
            url("/images/sticky.jpg");
        }

        @media screen and (max-width: 1024px) {
          .over {
            font-size: 30px;
          }
          .w3-col.s9 {
            width: 100%;
          }
        }
        @media screen and (max-width: 900px) {
          .w3-col.s9 {
            width: 100%;
          }
          #toppo p {
            display: none;
          }
          .w3-col {
            float: none !important;
          }
          #float > img {
            float: right;
          }
          .over {
            font-size: 30px;
          }
          .flew {
            padding-left: 20px;
            float: none;
          }
          .flew p {
            order: 2;
          }
          .flew img {
            order: 1;
          }

          .cop {
            padding-right: 20px;
            flex-direction: column;
            align-items: start !important;
          }
          .bom {
            margin-left: 30%;
          }
          .fix {
            flex-direction: column;
          }
          .beyhead {
            flex-direction: row;
            margin-left: 0px;
          }
          .w3-col.m6 {
            width: 100%;
          }
          .bey {
            margin-left: 0px;
          }
          .star {
            position: absolute;
            bottom: 0;
          }
        }

        @media screen and (max-width: 800px) {
          .over {
            font-size: 25px;
          }
          input {
            width: 80%;
          }
        }
        @media screen and (max-width: 750px) {
          .block {
            display: inline;
          }

          .xee {
            color: black;
          }
          .bom {
            margin-left: 17%;
          }
        }

        .xee,
        .w3-button {
          transition: background 0.5s;
        }
        @media screen and (max-width: 600px) {
          .over {
            padding-right: 5px;
            font-size: 20px;
          }
          .w3-modal {
            padding-top: 70px;
            display: block;
          }
        }
        @media screen and (max-width: 500px) {
          .crop {
            width: 300px;
            height: 200px;
          }
          .boye {
            padding: 5px 0px 0px 0px;
          }
          .bom {
            margin-left: 12%;
          }
          .why p {
            font-size: 14px;
          }
          .cop p {
            font-size: 14px;
          }
          .cop b {
            font-size: 16px;
          }
          .beyhead h1,
          .pro {
            font-size: 25px;
          }
          .flew {
            padding-left: 0px;
          }
          .star {
            width: 60px;
            height: 60px;
          }
          .xee {
            padding: 10px;

            margin-left: 0px;
          }
          .xee:hover {
            color: white;
          }
        }
        @media screen and (max-width: 400px) {
          .bgimg-1 {
            background-size: 100% 100%;
            height: 300px;
          }

          #toppo h3 {
            font-weight: 600;
          }
          .over {
            font-size: 17px;
          }
        }
        @media screen and (max-width: 330px) {
          .over {
            font-size: 17px;
          }
          #toppo h3 {
            font-weight: 600px;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
