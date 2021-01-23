import Head from "next/head";
import React, { useState } from "react";
import Footer from "../../components/footer2";
import Nav from "../../components/nav";
import {  FaTwitter, FaInstagram, FaFacebookF,FaLinkedinIn } from 'react-icons/fa';


export default function EniolaInfo() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  return (
    <div>
        <Head>
            <title>Eniola Olasogba</title>
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
                <img className = "boya w-2/3  sm:w-1/2 lg:w-2/3 rounded-full" src="/images/eniola.jpg" alt="" />
            
            </div>
            <div className="w3-col m6 ">
                <div className = " text-center pt-12 bow">
                    
                    <h3 className = "id text-2xl font-semibold">Eniola Olasogba</h3>
                    <p className = "id2 text-xl py-2">HEAD, Contents and Communications</p>
                    <p className = "id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">Olasogba Eniola is an undergraduate of physiology at the University of Ilorin.
                    She is a Christian and a content creator. Eniola is passionate about mental health and orphans. 
                    She loves reading, writing and gaining new experiences. 

                    </p>
                    <div className = "text-lg lg:text-xl pt-4 reach flex justify-center">
                    <a href = "https://www.facebook.com/henyhola.olasogba" className = "hover:text-gray-900"><FaFacebookF/></a>
                    <a href = "https://www.linkedin.com/in/eniola-olasogba-7b63751b9" className = "hover:text-gray-900"><FaLinkedinIn /></a>
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