import Head from "next/head";
import React from "react";
import Footer from "../../components/footer2";
import Nav from "../../components/nav";
import {  FaTwitter, FaInstagram, FaFacebookF,FaLinkedinIn } from 'react-icons/fa';


export default function AdesolaInfo() {
 
  return (
    <div>
      <Head>
        <title>Adesola Oyewole</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Source+Sans+Pro&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <Nav />

      <div className="w3-container bg-gray-200">
        <div className="w3-col m6  flex justify-center">
          <img
            className="boya w-2/3  sm:w-1/2 lg:w-2/3 rounded-full"
            src="/images/adesola.jpg"
            alt=""
          />
        </div>
        <div className="w3-col m6 ">
          <div className=" text-center pt-12 bow">
            <h3 className="id text-2xl font-semibold">Adesola Oyewole</h3>
            <p className="id2 text-xl py-2">Head, Finance/Ife Chapter Coordinator 1</p>
            <p className="id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">
              Adesola Oyewole is an undergraduate of demography and social
              statistics at Obafemi Awolowo University, Nigeria. She is a fellow
              of Millennium Campus Network in conjunction with United Nations
              Academic Impact. She is a young leader who is passionate about the
              sustainable development goals, she wants her voice heard and
              create a change.
            </p>
            <div className="text-lg lg:text-xl pt-4 reach flex justify-center">
              <a href="https://www.facebook.com/Adesola Eunice/" className = " hover:text-gray-900 " >
                < FaTwitter/>
             
              </a>
              <a href="https://www.instagram.com/h.i.sadesola"className = " hover:text-gray-900 ">
              <FaInstagram/>
              </a>
              <a href="https://www.facebook.com/adesola.eunice"className = " hover:text-gray-900 ">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/adesola-oyewole-b14bb2191"className = " hover:text-gray-900 ">
                < FaLinkedinIn/>
               
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer   */}
      <Footer />

      <style jsx>{`
       
        @media screen and (max-width: 992px){
            .w3-col.m6 {
                width: 100%;
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
       
        .w3-container{
            padding-top:8rem;
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
  );
}
