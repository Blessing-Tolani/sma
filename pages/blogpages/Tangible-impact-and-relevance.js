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
                <title>Tangible Impact And Relevance</title>
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
                                <img src = "/images/ife.jpeg" alt = "writer"   className=" w-32 rounded-full"/>
                            </div>
                            <div className = " pl-10 xl:pl-6 mt-1 text-gray-500">
                                <div className = "flex items-center mb-2">
                                    <AiOutlineUser/>
                                    <p className = "ml-2 inuse">Ifeoluwa Monja</p>
                                </div>
                                <div className = "flex items-center" >
                                    <BiCalendar/>
                                    <p className = "ml-2 inuse">Published January 2021</p>
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
                                <img src = "/images/ife.jpeg" alt = "writer"   className=" w-24 tablet:w-32 rounded-full"/>
                            </div>
                            <div className = " text-gray-500  ml-2">
                                <div className = "mb-2">
                                    <p className = "ml-2 inuse">Ifeoluwa Monja </p>
                                </div>
                                <div className = "" >
                                   
                                    <p className = "ml-2 inuse">Published January 2021</p>
                                </div>
                            </div>
                        </div>
                        <h6 className = "px-4 mobile:px-8 lg:pl-14">GROWTH & DEVELOPMENT</h6>
                        <div className = "pt-4">
                            <div>                              
                                <div className = "flex justify-center">
                                    <img src = '/images/skills.jpg' className = {BlogStyle.picture} />
                                </div>
                                <h3 className = "mb-4 bheading  text-center">Tangible Impact And Relevance - The Product Of Skills And Personal Development</h3>
                            </div>
                            <div className = "btext text-sm mobile:text-base px-4 mobile:px-8 lg:px-14 my-4 ">
                                <p>
                                A lot of people have different definitions for impact and relevance in all facets, but one thing that stands out and is common amongst all is the fact that impact and relevance bring about announcement via change and solutions, whether wanted or not.
                                </p>
                                <p className = "mt-2">
                                Of course, majority dream to be relevant,to be known and announced in a sense, but do all really wanna make tangible impact?
                                Is everyone truly concerned about bringing about change via implementation of long-lasting solutions?
                                Well, I think I can help with the answer, NO, not everyone is truly concerned about making a change, as sad as it is, it's the mindset of the average man who lives in a system that doesn't support him or provide infrastructure for better standard of living.
                                </p>
                                <p  className = "mt-2">
                                On the other hand, there are a few who truly want to make a difference but feel incapacitated due to their inabilities in certain areas, for instance, education, background etc.
                                But as a wise fellow once said, "once there is a will, there is a way".
                                </p>
                                <p  className = "mt-2">
                                A lot of people don't look at the issue of impact and relevance from the right perspective, there are people who were so poor in all facets, but still made tangible impact, why? Because they sought to solve a problem and even as they went on that path, by reason of dedication and consistency, they developed themselves in  necessary areas, hence the importance of skill sets and personal development even against all odds.
                                </p>
                                <p  className = "mt-2">
                                Soft and hard skills though on paper, might be as highly regarded as a bachelor's degree, but one thing people often miss out is that fact that a degree is only a platform for implementation and dissembursement of the expertise your skills give. 
                                </p>
                                <p  className = "mt-2">
                                The world we live in now is gradually shifting from the classroom, it is becoming more expedient that people not only regard formal education but on the basis of personal development, getting relational and hands-on skills is a vital means in bringing about change through long-lasting solutions.
                                </p>

                            </div>
                        </div>
                        <div className = "  text-gray-400  pb-10 pt-8 divdownpost">
                            <h2 className = {BlogStyle.next}>Read next post</h2>
                            <div className = "flex justify-around downpost mt-4  pt-10">
                                <div>
                                <Link href = "Self-Worth"><a >
                                   
                                   <div className =  'flex justify-center ' ><img src = "/images/worth.jpg" className = {BlogStyle.img} /></div>
                                    
                                   <div >
                                       <h2 className = {BlogStyle.blogtitle}>Self Worth</h2>
                                   </div>
                               </a></Link>
                                </div>
                                <div className = "blog2">
                                    <Link href = "The-Gum-on-the-Rock"><a >
                                    
                                   
                                    <div className =  'flex justify-center ' ><img src = "/images/gum.jpg" className = {BlogStyle.img} /></div>
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Gum on the Rock</h2>
                                    </div>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <Footer />
            </div>
        )
}