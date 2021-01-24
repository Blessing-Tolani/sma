import Head from 'next/head'
import React  from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav3";

export default function Gallery() {
 
  return (
    <div className = "body">
        <Head>
            <title>Gallery</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
           
            <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Sofia&family=Bodoni+Moda&display=swap" rel="stylesheet" />
            <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Head>
       <Nav />

        {/* Blog Section */}
        <div className = "w3-container">
            <div className = "blog-title-head">
                <h1 className = "blog-title text-gray-800">Image Gallery</h1>
            </div>
            <div className = "blog-container">
            <div className="w3-col s3 blog" >
                    <div><img src = "/images/hangout1.jpg" alt = "" /></div>
                    <div><h2>SMA Network Hangout</h2></div>
                </div>
                <div className="w3-col s3 blog" >
                    <div><img src = "/images/hangout2.jpg" alt = "" /></div>
                    <div><h2>SMA Network Hangout</h2></div>
                </div>
                <div className="w3-col s3 blog" >
                    <div><img src = "/images/hangout3.jpg" alt = "" /></div>
                    <div><h2>SMA Network Hangout</h2></div>
                </div>
               
            </div>
        </div>

       {/* footer */}
       <Footer />
        <style jsx>{`
    
        .blog-container{
            margin-left:1.666% !important;
        }
        .blog{
            margin:1.66%;
            height:50%;
         
        }
        .blog-title{
            padding-top:10px;
            font-family: 'Sofia', cursive;
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
            width:100%;
            height:500px;
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
        img{
            height:400px;
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
            img{
                height:400px;
            }
            }
            @media screen and (max-width: 650px){
                
                img{
                    height:350px;
                }
                }
        @media screen and (max-width: 600px){
            .w3-col.s3{width:80%;}
            .blog-container{
                margin-left:1% !important;
            }
            .blog{
                margin:5% 10% 8% 10%;
              
            }
            img{
                height:500px;
            }
            .blog-title{
                margin-left:10% !important;
            }
        
            }
            @media screen and (max-width: 500px){
              
                img{
                    height:400px;
                }
            }
        @media screen and (max-width: 400px){
            .w3-col.s3{width:90%;}
            .blog{
                margin:5% 5% 8% 4%;
                
            }

            .blog-title{
                margin-left:5% !important;
            }
            }
        
        `}</style>
    </div>
  )
}