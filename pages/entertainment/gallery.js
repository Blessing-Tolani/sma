import Head from 'next/head'
import Link from 'next/link'
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
                <h2 className = "blog-title text-gray-800">EXPLORE</h2>
            </div>
            <div className = "blog-container">
                <Link href = "/entertainment/gallery/hangout">
                    <a>
                        <div className="w3-col s3 blog" >
                            <div><img className = "image" src = "/images/hangout1.jpg" alt = "" /></div>
                            <div><h2>SMA Network Hangout</h2></div>
                            {/* <div className = "middle">
                                <div ><p className = "text">Check more Pictures</p></div>
                            </div> */}
                        </div>  
                    </a>
                </Link>
                <Link href = "/entertainment/gallery/Ife-February-School-Tour">
                    <a>
                        <div className="w3-col s3 blog " >
                            <div><img className = "image" src = "/images/IleIfeSchoolTour1/ifetour1a.jpeg" alt = "" /></div>
                            <div><h2>Ile-Ife February School Tour</h2></div>
                        </div>  
                        {/* <div className = "middle2">
                                <div><p className = "text">Check more Pictures</p></div>
                        </div> */}
                    </a>
                </Link>
               
            </div>
        </div>

       {/* footer */}
       <Footer />
        <style jsx>{`
    
        .blog-container{
            margin-left:1.666% !important;
        }
        .image{
            transition:.5s ease;
            opacity:1;
            backface-visibility:hidden;
             filter:brightness(40%);
        }
        .middle{
            transition:.5s ease;
            opacity:0;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            text-align:center;
          
        }
        
        .text{
            background-color:transparent;
            color:black;
            font-size:20px;
            font-weight:500;
        }
        
        .blog:hover .image{
            opacity:0.6;
        }
         .blog:hover .middle{
            opacity:1;
        } 
        .blog{
            margin:1.66%;
            height:50%;
            position:relative;
        }

        .blog-title{
            padding-top:10px;
            font-family: 'Sofia', cursive;
        }
        .blog h2{
            font-family: 'Bodoni Moda', serif;
            font-size: calc(18px + 5*(100vw - 400px)/1000);
        }
        .blog p{
            font-family: 'ABeeZee', sans-serif;
        }
        .w3-col.s3{width:30%;}
        img{
            width:100%;
            height:300px;
            object-fit:fill;
        }
        @media screen and (min-width: 600px){
        .blog-title {
            text-align:center;
            font-size: calc(30px + 15*(100vw - 600px)/1000);
         }
        }
        @media screen and (max-width: 900px){
        .w3-col.s3{width:40%;}
        .blog{
            margin:4%;
          
        }
        img{
            height:300px;
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
                height:300px;
            }
            }
            @media screen and (max-width: 650px){
                
                img{
                    height:300px;
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
                height:300px;
            }
            .blog-title{
                margin-left:10% !important;
            }
        
            }
            @media screen and (max-width: 500px){
              
                img{
                    height:300px;
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