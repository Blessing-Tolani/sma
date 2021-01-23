import Head from "next/head";
import React, { useState } from "react";
import Footer from "../../components/footer2";
import Nav from "../../components/nav";
import {  FaTwitter, FaInstagram, FaFacebookF,FaLinkedinIn } from 'react-icons/fa';


export default function MarvyInfo() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  return (
    <div>
        <Head>
            <title>Marvellous Sunmiboye</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Source+Sans+Pro&family=Playfair+Display&display=swap" rel="stylesheet" />
            <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Head>

        <Nav />



        
        <div className="w3-container bg-gray-200" >
            <div className="w3-col m6  flex justify-center">
                <img className = "boya w-2/3  sm:w-1/2 lg:w-2/3 rounded-full" src="/images/marvy.jpg" alt="" />
            
            </div>
            <div className="w3-col m6 ">
                <div className = " text-center pt-4 bow">
                    
                    <h3 className = "id text-2xl font-semibold">Marvellous Sunmiboye</h3>
                    <p className = "id2 text-xl py-2">Director</p>
                    <p className = "id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">Sunmiboye is a content developer, public speaker, social entrepreneur, and a human capacity strategist.
                    He is passionate about growth, impact, influence, relevance and always excited about any opportunity to reflect these.
                    
                    Sunmiboye has certifications from the University of North Carolina, YALE, Mohammed-Bin Rashid University,
                    African Leadership University, Corporate Finance Institute, YALI, WHO to mention a few.
                    He is the Director of The S. M. A Impact Network, a hub envisioned to help young people build necessary capacity to 
                    influence their spheres. He is an alumus of The United Nations Millennium Fellowship and Leaders Development Hub.
                    A member of Leaders' Quarters, Amnesty International and the United States Institute of Peace
                    </p>
                    <div className = "text-lg lg:text-xl pt-4 reach flex justify-center">
                    <a href = "https://twitter.com/The_Real_Marvey?s=08"  className = "hover:text-gray-900"><FaTwitter /></a>
                    <a href = "instagram.com/marvey_marvey" className = "hover:text-gray-900"><FaInstagram /></a>
                    <a href = "facebook.com/sunmiboye.ayomide" className = "hover:text-gray-900"><FaFacebookF/></a>
                    <a href = " https://www.linkedin.com/in/marvellous-ayomide-sunmiboye-a1241a1a7" className = "hover:text-gray-900"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

        
        </div>
         <Footer />
        <style jsx>{`
       
        @media screen and (max-width: 992px){
            .w3-col.m6 {
                width: 100%;
            }
           
        }
        
        @media screen and (max-width:400px){
           
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