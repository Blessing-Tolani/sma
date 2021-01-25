import Head from 'next/head'
import React  from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav2";
import Blog from "../../components/Blog";



export default function article() {
  
  return (
    <div className = "body">
        <Head>
            <title>Blogs</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
           
            <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Pacifico&family=Bodoni+Moda&family=Noto+Serif+JP&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Sofia&family=Old+Standard+TT&family=Roboto+Slab&family=Lato:ital@1&display=swap" rel="stylesheet" />
            <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Head>
        {/* Nav section */}
        <Nav />
        {/* Blog Section */}
        <div className = "w3-container">
            <div className = "blog-title-head">
                <h1 className = "blog-title text-gray-800">View our Blog</h1>
            </div>
            <div className = "blog-container">
                <Blog />
            </div>
        </div>

        {/* Footer   */}
        <Footer />
        <style jsx>{`
        .w3-hide-large{
            display:none;
        }
         div.PD{
            margin-bottom: -9px;
        }
        .blog-title{
            font-family: 'Sofia', cursive;
           
        }
        .mug{
            border-radius:50%;
            padding:8px 16px;
       
          }
        .xee{
            padding:10px;
            color:#c0c0c0;
            margin-left:30px;
        }
        .w3-button:hover{color:white!important;background-color:black !important};
      
        .fulldiv {
            padding-left: 0px;
         }
        .pub {
        width: 60px ;
        height: 60px;
        position: relative;
        padding-top:0px;
        }
        .w3-top{
            position:relative;
        }
        .topdiv{
            height:60px;
            padding-right:30px;
        }
        .blog-container{
            margin-left:1.666% !important;
        }
        .blog{
            margin:1.666%;
            height:40%;
        }
        .blog-title{
            padding-top:10px;
        }
        .blog h2{
            font-family: 'Bodoni Moda', serif;
            font-size: calc(20px + 5*(100vw - 400px)/1000);
        }
        .blog p{
            font-family: 'ABeeZee', sans-serif;
        }
        .w3-col.s3{width:30%;}
        img{
            height:250px;
        }
        @media screen and (min-width: 600px){
        .blog-title {
            text-align:center;
            font-size: calc(40px + 15*(100vw - 600px)/1000);
         }
        }
        @media screen and (max-width: 900px){
        .w3-col.s3{width:40%;}
        .blog{
            margin:4%;
          
        }
        .blog-container{
            margin-left:4% !important;
        }
        }
        @media screen and (max-width: 768px){
            .w3-col.s3{width:42%;}
            .blog{
                margin:3%;
               
            }
            .blog-container{
                margin-left:3% !important;
            }
            }
        @media screen and (max-width: 600px){
            .w3-col.s3{width:80%;}
            .blog{
                margin:5% 10% 8% 10%;
              
            }
            .blog-title{
                margin-left:10% !important;
            }
            .xee{
                margin-left:10px;
            }
            }
            @media screen and (max-width: 500px){
                .xee{
                    margin-left:0px;
                    font-size:15px !important;
                }
            }
        @media screen and (max-width: 400px){
            .w3-col.s3{width:90%;}
            .blog{
                margin:5% 5% 8% 4%;
                
            }
            .xee{
                font-size:14px !important;
            }
            .topdiv {
                padding-right: 0px;
            }
            .blog-title{
                margin-left:5% !important;
            }
            }
            @media screen and (max-width: 330px){
            .pub {
                width: 40px ;
                height: 40px;
               
                }
                .topdiv {
                    height:40px;
                }
            }
        `}</style>
    </div>
  )
}