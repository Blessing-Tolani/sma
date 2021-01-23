import Head from "next/head";
import Footer from "../../components/footer2";
import React, { useState } from "react";
import Nav from "../../components/nav";
import {  FaTwitter, FaInstagram, FaFacebookF,FaLinkedinIn } from 'react-icons/fa';


export default function BadejoInfo() {
 
  return (
    <div>
      <Head>
        <title>Oladapo Olatunbosun</title>
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
            src="/images/daniel.jpeg"
            alt=""
          />
        </div>
        <div className="w3-col m6 ">
          <div className=" text-center pt-12 bow">
            <h3 className="id text-2xl font-semibold">Oladapo Olatunbosun</h3>
            <p className="id2 text-xl py-2">Ife Chapter Coordinator 2</p>
            <p className="id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">
            Oladapo Olatunbosun is a student of Obafemi Awolowo University studying Electrical and electronics engineering.
             He loves organization and orderliness and also has a flair for telecommunication. 
             He is passionate about the mental health of people and loves making confectioners. 
            He strongly believes in self development and mentorship.
            </p>
            <div className = "text-lg lg:text-xl pt-4 reach flex justify-center">
                    <a href = "https://twitter.com/dapo_lora?s=09"  className = "hover:text-gray-900"><FaTwitter /></a>
                    <a href = "https://www.instagram.com/dapo.lora?r=nametag" className = "hover:text-gray-900"><FaInstagram /></a>
                    <a href = "https://www.facebook.com/profile.php?id=100008495197452" className = "hover:text-gray-900"><FaFacebookF/></a>
                    <a href = "https://www.linkedin.com/in/oladapo-daniel-olatubosun-aa634a14a" className = "hover:text-gray-900"><FaLinkedinIn /></a>
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
