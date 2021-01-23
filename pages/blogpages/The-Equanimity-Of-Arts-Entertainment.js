import Head from "next/head";
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
                <title>The Equanimity Of Arts & Entertainment</title>
                <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Pacifico&family=Bodoni+Moda&family=Noto+Serif+JP&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap" rel="stylesheet" />
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
                                <img src = "/images/elizabeth.jpeg" alt = "writer"   className=" w-32 rounded-full"/>
                            </div>
                            <div className = " pl-10 xl:pl-6 mt-1 text-gray-500">
                                <div className = "flex items-center mb-2">
                                    <AiOutlineUser/>
                                    <p className = "ml-2 inuse">Elizabeth Atolagbe</p>
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
                                <a href = "#">
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Right Relationship</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/relationship.jpg" className = {BlogStyle.img} /></div>
                                </a>
                            </div>
                            <div className = "mt-10">
                                <a href = "#">
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>Depression -The Subtle Enemy</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/depression.jpg" className = {BlogStyle.img} /></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className = "bmain  text-gray-200">
                        <div className = " px-4 mobile:px-8 lg:px-14 flex   h-40 pt-10 items-center divuppost">
                            <div className = "">
                                <img src = "/images/elizabeth.jpeg" alt = "writer"   className=" w-24 tablet:w-32 rounded-full"/>
                            </div>
                            <div className = " text-gray-500  ml-2">
                                <div className = "mb-2">
                                    <p className = "ml-2 inuse">Elizabeth Atolagbe </p>
                                </div>
                                <div className = "" >
                                   
                                    <p className = "ml-2 inuse">Published January 2021</p>
                                </div>
                            </div>
                        </div>
                        <h6 className = "px-4 mobile:px-8 lg:pl-14">SOCIAL</h6>
                        <div className = "pt-4">
                            <div>                              
                                <div className = "flex justify-center">
                                    <img src = '/images/art.jpg' className = {BlogStyle.picture} />
                                </div>
                                <h3 className = "mb-4 bheading  text-center">The Equanimity Of Arts & Entertainment</h3>
                            </div>
                            <div className = " text-sm mobile:text-base px-4 mobile:px-8 lg:px-14 my-4 ">
                                <p>
                                Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight. 
                                Art is something that is created with imagination and skill and that is beautiful or that expresses important ideas or feelings.
                                Art imitates life, and that's what makes it an important part of our being.
                                </p>
                                <p className = "mt-2">
                                There are various forms of art, both contemporary and conventional. There is music, movies, theater, literature, fine arts, visual arts, graphic designing and much more that can be explored in this area of interest.
                                As far as entertainment goes, we all know its importance in today's living. Not only it is a form of expression, but it also a stress buster in present hectic time. It takes our mind off from hassles of our lives and also provides us with knowledge from all around the globe. Television, internet, cell phones, gaming consoles, gadgets and gizmos are the main sources of entertainment today.
                                Art, in any form, can give people emotions that can lift up their spirit and make them more driven than ever.
                                </p>
                                <p  className = "mt-2">
                                 One of the most common trends in the tourism industry is hospitality art, which utilizes art to invite guests and engage them more throughout their stay. Corporate art inspires workers and boosts productivity using art inside the workplace. Hospital art, or healing art is also one way of helping patients recover faster and their family and healthcare workers to regain their composure and stay calm.
                                </p>
                                <p  className = "mt-2">
                                Entertainment is so important in our life. It brings human beings together and also a superb way for the entire family to the tie-in. Without entertainment, we do not have any refreshments in our life. It plays a very big role in living a normal and happy life. Entertainment brings happiness, which is the most powerful medicine that helps to keep our mental health and well-being. It also means of drowning the monotony of our daily lives.
                                </p>
                            </div>
                        </div>
                        <div className = "  text-gray-400  pb-10 pt-8 divdownpost">
                            <h2 className = {BlogStyle.next}>Read next post</h2>
                            <div className = "flex justify-around downpost mt-4  pt-10">
                                <div>
                                    <a href = "#">
                                        <div className =  'flex justify-center ' ><img src = "/images/relationship.jpg" className = {BlogStyle.img2} /></div>
                                        <div >
                                            <h2 className = {BlogStyle.blogtitle}>The Right Relationship</h2>
                                        </div>
                                       
                                    </a>
                                </div>
                                <div className = "blog2">
                                    <a href = "#">
                                        <div className =  'flex justify-center ' ><img src = "/images/depression.jpg" className = {BlogStyle.img2} /></div>
                                        <div >
                                            <h2 className = {BlogStyle.blogtitle}>Depression -The Subtle Enemy</h2>
                                        </div>
                                      
                                    </a>
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