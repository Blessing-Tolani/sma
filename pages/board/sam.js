import Head from "next/head";
import React, { useState } from "react";
import Footer from "../../components/footer2";
import Nav from "../../components/nav";
import {  FaTwitter, FaInstagram, FaFacebookF,FaLinkedinIn } from 'react-icons/fa';



export default function SamInfo() {
     const [menuIsOpen, setMenuIsOpen] = useState(false);
    const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  return (
    <div>
        <Head>
            <title>Samuel Adekunle</title>
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
                <img className = "boya w-2/3  sm:w-1/2 lg:w-2/3 rounded-full" src="/images/sam2.jpeg" alt="" />
            
            </div>
            <div className="w3-col m6 ">
                <div className = " text-center pt-12 bow">
                    
                    <h3 className = "id text-2xl font-semibold">Samuel Adekunle</h3>
                    <p className = "id2 text-xl py-2">HEAD, Strategy and Logistics</p>
                    <p className = "id2 text-left  px-2 sm:px-4 lg:px-0 text-lg">Adekunle Samuel is a 3rd year Biochemistry student 
                    at the University of Ilorin.
                    He is an ardent learner and a personal development advocate.
                        Samuel is a copywriter and researcher. He is passionate about health care and cancer biology.
                        He loves traveling, reading and playing computer games. Samuel's favorite colour is blue. 
                        He has a penchant for changing lives, he is involved in Networks and Foundations that 
                        evidently seek to impact lives.


                    </p>
                    <div className = "text-lg lg:text-xl pt-4  reach flex justify-center">
                    <a href = "https://mobile.twitter.com/s_samyjay" className = "hover:text-gray-900"><FaTwitter /></a>
                    <a href = "https://www.instagram.com/samyjjay/" className = "hover:text-gray-900"><FaInstagram /></a>
                    <a href = " https://www.linkedin.com/in/samuel-adekunle-0b03b4198" className = "hover:text-gray-900"><FaLinkedinIn /></a>
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