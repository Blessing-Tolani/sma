import Head from "next/head";
import React, { useState } from "react";
import Footer from "../../components/footer2";
import Nav from "../../components/nav";
import {  FaTwitter, FaInstagram, FaFacebookF,FaLinkedinIn } from 'react-icons/fa';



export default function TestInfo() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  return (
    <div>
        <Head>
            <title>Testimony Adebiyi</title>
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
                <img className = "boya  w-2/3  sm:w-1/2 lg:w-2/3 rounded-full" src="/images/test.jpg" alt="" />
            
            </div>
            <div className="w3-col m6 ">
                <div className = " text-center pt-12 bow">
                    
                    <h3 className = "id text-2xl font-semibold">Testimony Adebiyi</h3>
                    <p className = "id2 text-xl py-2">Administrator</p>
                    <p className = "id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">Testimony Adebiyi is an undergraduate studying 
                    Library and Information Science at the University of Ilorin.
                        She is a teacher, content writer, public speaker,  programmer and SDG's advocate.
                        She is a career cum consultant that guides young people on their journey in making life-changing decisions.
                        She is a dogged and charismatic lady who strongly believes everyone 
                        should be committed to personal development in other to become their ideal person. 
                    She is a devout Christian whose mission on earth is to leave an indelible mark in the sands of time.


                    </p>
                    <div className = "text-lg lg:text-xl pt-4 reach flex justify-center">
                    <a href = "https://twitter.com/Testyb5?s=09" className = "hover:text-gray-900"><FaTwitter /></a>
               
                <a href = " https://www.facebook.com/testimony.oluwakemi"className = "hover:text-gray-900"><FaFacebookF/></a>
                <a href = "https://www.linkedin.com/in/testimony-adebiyi-5162661b3"className = "hover:text-gray-900"><FaLinkedinIn /></a>
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