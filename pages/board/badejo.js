import Head from "next/head";
import Footer from "../../components/footer2";
import React, { useState } from "react";
import Nav from "../../components/nav";
import {  FaTwitter, FaInstagram, FaFacebookF,FaLinkedinIn } from 'react-icons/fa';


export default function BadejoInfo() {
 
  return (
    <div>
      <Head>
        <title>Joshua Badejo</title>
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
            src="/images/badejo.jpeg"
            alt=""
          />
        </div>
        <div className="w3-col m6 ">
          <div className=" text-center pt-12 bow">
            <h3 className="id text-2xl font-semibold">Joshua Badejo</h3>
            <p className="id2 text-xl py-2">Deputy Head, Media</p>
            <p className="id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">
            Joshua Badejo is an emerging optometrist from the department of Optometry
             and Vision science in the university of Ilorin, Ilorin Kwara state, Nigeria.
              He is a graphics designer,growing programmer, public speaker,
               an exceptional influencer and an ardent lover of Jesus Christ. 
               His Interest are in leadership, health care, technological innovation and societal development, 
            with the view to provoke productivity and sustainability in his sphere of influence.
            </p>
            <div className="text-lg lg:text-xl pt-4 flex justify-center reach">
            
              <a href="https://m.facebook.com/joshua.badejo.73" className="hover:text-gray-900">
              <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/joshua-olajide-7333461a9" className="hover:text-gray-900">
                  <FaLinkedinIn />
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
