import Head from "next/head";
import Link from "next/link";
import BlogStyle from "../../styles/blog.module.css";
import Footer from "../../components/footer3";
import Nav from "../../components/nav2";
import React  from "react";
import {AiOutlineUser} from 'react-icons/ai';
import {BiCalendar} from 'react-icons/bi';


export default function Art() {
        return(
            <div className = "body">
                <Head>
                <title>School Tour at Seventh Day Adventist School</title>
                <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Bodoni+Moda&display=swap" rel="stylesheet" />
                <meta charSet="UTF-8" />
                <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />
                </Head>

                <Nav />
                {/* document body */}

                <div className = "bodywrapper  flex ">
                    <div className = "bside  pt-20 ">
                        <div className = "">
                            <div className = " h-48 w-full flex justify-center items-center">
                                <img src = "/images/bloglogo.jpg" alt = "writer"   className=" w-32 rounded-full"/>
                            </div>
                            <div className = " pl-10 xl:pl-6 mt-1 text-gray-500">
                                <div className = "flex items-center mb-2">
                                    <AiOutlineUser/>
                                    <p className = "ml-2 inuse">SMA Impact Network</p>
                                </div>
                                <div className = "flex items-center" >
                                    <BiCalendar/>
                                    <p className = "ml-2 inuse">Published February 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className = " mt-8 text-gray-400">
                            <h2 className = {BlogStyle.next}>Read next post</h2>
                            <div className = "mt-8">
                                <Link href = "Self-Worth"><a >
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>Self Worth</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/worth.jpg" className = {BlogStyle.img} /></div>
                                </a></Link>
                            </div>
                            <div className = "mt-10">
                                <Link href = "The-Gum-on-the-Rock"><a >
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Gum on the Rock</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/gum.jpg" className = {BlogStyle.img} /></div>
                                </a></Link>
                            </div>
                          
                        </div>
                    </div>

                    <div className = "bmain  text-gray-200">
                        <div className = " px-4 mobile:px-8 lg:px-14 flex   h-40 pt-10 items-center divuppost">
                            <div className = "">
                                <img src = "/images/bloglogo.jpg" alt = "writer"   className=" w-24 tablet:w-32 rounded-full"/>
                            </div>
                            <div className = " text-gray-500  ml-2">
                                <div className = "mb-2">
                                    <p className = "ml-2 inuse">SMA Impact Network</p>
                                </div>
                                <div className = "" >
                                   
                                    <p className = "ml-2 inuse">Published February 2021</p>
                                </div>
                            </div>
                        </div>
                        <h6 className = "px-4 mobile:px-8 lg:pl-14">SCHOOL TOUR</h6>
                        <div className = "pt-4">
                            <div>                              
                                <div className = "flex justify-center">
                                    <img src = '/images/IleIfeSchoolTour1/ifetour1a.jpeg' className = {BlogStyle.picture} id = "picture" />
                                </div>
                                <h3 className = "mb-4 bheading  text-center">School Tour at Seventh Day Adventist Secondary School Lagere, Ile Ife Osun State</h3>
                            </div>
                            <div className = "btext text-sm mobile:text-base px-4 mobile:px-8 lg:px-14 my-4 ">
                                <p>
                                
                                The program started with Adesola (Chapter Coordinator) introducing herself and the Organization (what we do) to the students. 
                                She emphasized on our vision to see young people grow to the fullness of their potentials.
                                She also gave a brief introduction of why we visited their school- To sow a seed of intentionality to them; in our bid to see young people grow, we have decided to visit to help them see life from a clearer perspective and help guide to become people of relevance in their environment. 

                                </p>
                                <p className = "mt-2">
                                Shortly after that, Ifeoluwa (Communications Department) took the Q&A session by asking three  students where they see themselves in the next two years - 
                                Most of the students mentioned that they'll be at an higher institution of learning. Ife furthermore explained to them that beyond just going into higher institutions, they should begin to identify problems in their environments and make plans on how to solve them. He stressed that's a pathway to impact and relevance.
                                We were able to curate the level of engagements of these students with  their future. We saw a need for career development in secondary schools.
                                </p>
                                <p  className = "mt-2">
                                After the Q&A session, Jesutosin (main speaker) came on board to deliver a speech  TITLED;
                                THE INTENTIONALITY OF GROWTH. She spoke for about 20 minutes. Jesutosin enlightened the students on the need for personal development. She stressed that every good result they desired come on the strength of intentionality. She engaged them on the need to see themselves as the best in whatever they do and consequently work towards seeing that they become the best. She stressed that growth is possible, only if they take it as their life depended on it.
                                </p>
                                <p  className = "mt-4">
                                Then there was an interactive session to see if the students really got what we spoke to them about. We were encouraged as a number of them determined to be intentional about themselves and their growth.
                                Before we left, each member of the team interacted with some of the students and got to know them better. We had a lovely time taking pictures, see them <a href = "/entertainment/gallery/Ife-February-School-Tour" class = "gallerylink">here</a>

                                </p>
                              
                            </div>
                        </div>
                        <div className = "  text-gray-400  pb-10 pt-8 divdownpost">
                            <h2 className = {BlogStyle.next}>Read next post</h2>
                            <div className = "flex justify-around downpost mt-4  pt-10">
                                <div>
                                    <Link href = "Tangible-impact-and-relevance"><a >
                                        <div className =  'flex justify-center ' ><img src = "/images/skills.jpg" className = {BlogStyle.img2} /></div>
                                        <div >
                                            <h2 className = {BlogStyle.blogtitle}>Tangible Impact And Relevance</h2>
                                        </div>
                                       
                                    </a></Link>
                                </div>
                                <div className = "blog2">
                                    <Link  href = "Self-Worth"><a>
                                        <div className =  'flex justify-center ' ><img src = "/images/worth.jpg" className = {BlogStyle.img2} /></div>
                                        <div >
                                            <h2 className = {BlogStyle.blogtitle}>Self Worth</h2>
                                        </div>
                                      
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <Footer />
                <style jsx>{`

                    #picture{
                        width:566px;
                        height:424px;
                    }
                    @media screen and (max-width:600px){
   
                        #picture{
                            width:400px;
                            height:250px;
                        }
                       
                    }
                    @media screen and (max-width:450px){
                       
                        #picture{
                            width:300px;
                            height:200px;
                        }
                       
                    }

                `}</style>
            </div>
           
        )
}