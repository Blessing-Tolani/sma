import Head from 'next/head'
import React  from "react";
import Nav from "../../components/nav3";
import Footer from "../../components/footer";


export default function Volunteer() {
   
    
    return (
        <div className = "body">
            <Head>
              <title>Volunteer with us</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
             
              <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Pacifico&family=Bodoni+Moda&family=Noto+Serif+JP&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css2?family=Sofia&family=Old+Standard+TT&family=Roboto+Slab&family=Lato:ital@1&display=swap" rel="stylesheet" />
              <script src = "https://kit.fontawesome.com/a076d05399.js"></script>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </Head>
            <Nav />

            <div className = "w3-container ">
                <h2 id = "touch" className = "text-center">Volunteer with us</h2>
            </div>
            {/* Volunteer form */}
            <div className = "w3-container  cont flex items-center ">
                <div className = "w3-col s6  formdiv flex "> 
                   
                    <form action = "/success" className = " formhead " method = "POST"  name ="Volunteer Form">
                        <input type = "hidden" name = "form-name" value ="Volunteer Form" />
                        <input type="text" name = "Firstname Surname" placeholder="Firstname Surname" required="" className = "input"/> 
                        <input className = "input" type="email" name="Email" placeholder="Email" required="" pattern="^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([A-Za-z]{3})$" /> <br className = "br" />
                        <input className = "input" type="text" name = "Location" placeholder="Location (City and Country)" required /> 
                        <input className = "input" type="number" name = "Whatsapp Number "placeholder="Phone Number (Whatsapp)" required/> <br className = "br" />

                        <textarea placeholder="What are your strengths ?" name = "Strengths"  required></textarea> 
                        <textarea placeholder="What do you consider to be your weakness(es) ?" name = "Weakness(es)" required ></textarea> <br className = "br" />                        
                        <textarea placeholder="Why wil you like to volunteer with us ?" name = "Reason for Volunteering"  required></textarea> 
                        <textarea placeholder="What skills do you have ?" name = "Skills"  required></textarea>  <br className = "br" />

                        <div className = "inline special">
                            <p>Gender</p>
                            <input type="radio" name="Gender" value="Male" />
                            <label for="male"> Male</label><br />
                            <input type="radio" name="Gender" value="Female" />
                            <label for="female"> Female</label><br />
                        </div>

                        <div className = "inline ">
                            <p>Have you volunteered in an organization before ? </p>
                            <input type="radio"name="Volunteered before" value="Yes" />
                            <label for="yes"> Yes</label><br />
                            <input type="radio"  name="Volunteered before" value="No" />
                            <label for="no"> No</label><br />
                        </div>
                        <div className = "flex bow ">
                        <div className = " inline but">
                            <p> What department will you like to volunteer with?</p>
                            <input type="radio"  name="Department" value="Content and Communications" />
                            <label for="department1"> Content and Communications</label><br />
                            <input type="radio"  name="Department" value="Strategy and Logistics" />
                            <label for="department2"> Strategy and Logistics</label><br />
                            <input type="radio"  name="Department" value="Media" />
                            <label for="department3"> Media</label><br />
                        </div>

                        <div className = "inline but">
                            <p>How long will you like to volunteer with us ?</p>
                            <input type="radio"  name="Duration" value="3 Months" />
                            <label for="duration1"> 3 Months</label><br />
                            <input type="radio"  name="Duration" value="6 Months" />
                            <label for="duration2"> 6 Months</label><br />
                        </div>
                        </div>
                        <div className = "text-center">
                        <button type="submit" id="button" className = "onebutton">Submit</button>
                        </div>
                    </form>
                </div>
                <div className = "w3-col s6 flex items-center order">
                    <img src = "/images/volunteer.jpg" alt = ""/>
                </div>
            </div>


            {/* Footer   */}
            <Footer />

        <style jsx>{`
         .w3-button:hover{color:white!important;background-color:black !important};
        #touch{
            font-family: 'Sofia', cursive;
          
        }
        input:focus,  textarea:focus {
            background-color:#e8f0fe;
        }
        .onebutton{
            margin:0 auto;
            font-family: 'ABeeZee';
            color:#053d59;
            font-size:15px;
            padding:8px 22px;
            border-top:1px solid #053d59;
            border-right:1px solid #053d59;
            border-bottom:1px solid #053d59;
            border-top-right-radius:50%;
            border-bottom-right-radius:50%;
        }
        .onebutton:hover , .onebutton:focus{
            border-top:1px solid #808080;
            border-right:1px solid #808080;
            border-bottom:1px solid #808080;
            color:#808080;
        }
        .inline{
            display:inline-block;
          
        }
        .inline, .but{
            margin:10px 2.5%;
            font-family: 'ABeeZee';
            font-size: 14px;
            color:#053d59;
        }
        .special{
            width:20%;
        }

        .formdiv{
           
        }
        .formhead{
            width:100%;
        }
        .input{
            width:45%;
            height:40px;
            border:1px solid #f3f3f3;
            background-color: #f3f3f3;
            border-radius: 0.6em;
            padding:20px;
            margin:10px 2.5%;
            font-family: 'ABeeZee';
           
            font-size: 14px;
            color:#053d59;
            
            
            }
        textarea{
            color:#053d59;
            font-family: 'ABeeZee';
            border:1px solid #f3f3f3;
            background-color: #f3f3f3;
            border-radius: 0.6em;
            padding:20px;
            margin:10px 2.5%;
            width:45%;
            height:120px;
            font-size: 14px;
            }
        .w3-hide-large{
            display:none;
        }
         div.PD{
            
            margin-bottom: -9px;
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
       
        
        @media screen and (min-width: 600px){
        .blog-title {
            text-align:center;
            font-size: calc(40px + 15*(100vw - 600px)/1000);
         }
        }
        @media screen and (max-width: 1000px){
            .input, textarea{
                padding:10px;
                }
           
        }
        @media screen and (max-width: 950px){
          .w3-col.s6 {
              width:100%;
          }
          .formdiv{
              order:2;
          }
          .order{
              order:1;
          }
          .cont{
            
              flex-direction:column !important;
             align-items:center;
          }
          .formdiv{
              width:90% !important;
          }
          .input, textarea{
            padding:20px;
            width:48%;
            margin:10px 1%;
            }
        }
        @media screen and (max-width: 768px){
            .formdiv{
                width:100% !important;
            }
            }
        @media screen and (max-width: 600px){
            .input ,textarea{
                display:block;
                padding:20px;
                width:90%;
                margin:15px 0%;
            }
            .br{
                display:none;
            }
            .xee{
                margin-left:10px;
            }
            .bow{
               flex-direction:column ;
            }
            }
            @media screen and (max-width: 500px){
                .xee{
                    margin-left:0px;
                    font-size:15px !important;
                }
                .special{
                    width:100%;
                }
                #touch{
                   
                    font-size:25px;
                }
            }
        @media screen and (max-width: 400px){
            .input ,textarea{
                width:100%;
               
            }
            
            .xee{
                font-size:14px !important;
            }
            .topdiv {
                padding-right: 0px;
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