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
                <title>The Right Relationship</title>
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
                                <img src = "/images/adejoke.jpeg" alt = "writer"   className=" w-32 rounded-full"/>
                            </div>
                            <div className = " pl-10 xl:pl-6 mt-1 text-gray-500">
                                <div className = "flex items-center mb-2">
                                    <AiOutlineUser/>
                                    <p className = "ml-2 inuse">Adejoke Olaiya</p>
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
                                <Link href = "The-Equanimity-Of-Arts-Entertainment"><a >
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Equanimity Of Arts & Entertainment</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/art.jpg" className = {BlogStyle.img} /></div>
                                </a></Link>
                            </div>
                            <div className = "mt-10">
                                <Link href = "Depression-The-Subtle-Enemy"><a >
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>Depression -The Subtle Enemy</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/depression.jpg" className = {BlogStyle.img} /></div>
                                </a></Link>
                            </div>
                            <div className = "mt-10">
                                <Link href = "Tangible-impact-and-relevance"><a >
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>Tangible Impact And Relevance</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/skills.jpg" className = {BlogStyle.img} /></div>
                                </a></Link>
                            </div>
                            <div className = "mt-10">
                                <Link href = "Self-Worth"><a >
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>Self Worth</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/worth.jpg" className = {BlogStyle.img} /></div>
                                </a></Link>
                            </div>
                        </div>
                    </div>

                    <div className = "bmain  text-gray-200">
                        <div className = " px-4 mobile:px-8 lg:px-14 flex   h-40 pt-10 items-center divuppost">
                            <div className = "">
                                <img src = "/images/adejoke.jpeg" alt = "writer"   className=" w-24 tablet:w-32 rounded-full"/>
                            </div>
                            <div className = " text-gray-500  ml-2">
                                <div className = "mb-2">
                                    <p className = "ml-2 inuse">Adejoke Olaiya</p>
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
                                    <img src = '/images/relationship.jpg' className = {BlogStyle.picture} />
                                </div>
                                <h3 className = "mb-4 bheading  text-center">The Right Relationship</h3>
                            </div>
                            <div className = "btext text-sm mobile:text-base px-4 mobile:px-8 lg:px-14 my-4 ">
                                <p>
                                Relation"ships" are transportation devices that move you from your current location to your preferred destination. These "ships" will either lead you to prosperity or poverty. That is why people will always say that "Who you end up choosing as your life partner determines what your life becomes after marriage". Your life might become better or worse but it is base on the choice you make and vase on your understanding about Relationships.
                                </p>
                                <p className = "mt-2">
                                Relationships are indispensable. It can't be less emphasized on. Relationships are needed in other to win, to grow, and to lead.  There are ways to invest in relationships and you will enjoy the dividends of such investment. They are:
                                </p>
                                <p  className = "mt-4">
                                    <ol>
                                        <l1>
                                            <b>Lead Down</b>
                                            <p>
                                            To have a smooth relationship with people, lead down. Regardless of the level you're currently, try to relate with others that are lower than you're. The truth is that there are people looking up to you in or way or the other(I say this often).
                                            </p>
                                            
                                            <p className = "mt-2">
                                            So, regardless of what you might be going through, there are folks who are looking up to you. You're someone's hero. Friends, you have to deliberately invest in other people!
                                            </p>
                                            <p className = "mt-2" >
                                            Lead down by having at least one or two people you're mentoring. Meanwhile, only teach what you know, what you have overcome, what you have succeeded at and what you're good at. Ensure you do not replicate your errors by teaching them what you're not so good at. He who waters shall be watered and success is replicable and transferable. If no one can say that your presence in their life has made them better, it means you have been either selfish or merely existing.
                                            </p>
                                        </l1>
                                        <li className = "mt-4">
                                            <b >Lead Across</b>
                                            <p>
                                            This category is the category of those you're probably in the same class with, working at the same organization, business or NGO or chasing the same things. You have to recognize those ones going somewhere, surround yourself with colleagues who are as driven or even more driven than you. Those are friends who will share opportunities when it seems there are none. They are folks who will cheer you up when you're down. They are the ones who will throw you up when you win.
                                            </p>
                                            <p className = "mt-2">
                                            To lead across, you need to look out for your peers(even your mentees too). Share resources like programs, books. Hoard knowledge like information and share freely. The way to be resourceful is to be "a resource". Genuinely care about people as much as you can, reach out and always follow up.
                                            </p>
                                        </li>
                                        <li  className = "mt-4">
                                            <b>Lead up</b>
                                            <p>
                                            Mentors and role models are powerful forces. The fastest way to achieve a certain things is to look for someone who has achieved it and learn at their feet. But what I can tell you is that "mentors and role models" can change your life. Some of you are already working with rock stars and sometimes the issue is that you're too close to the person to respect them. That person could be at your office, someone in church, or mosque or someone you have easy access to. And because of the familiarity, you're not humble enough to learn. Stay humble and learn!
                                            </p>
                                            <p className = "mt-2">
                                            Other times, the person is far away. You have social media so you have no excuse. If you want someone to mentor you, don't ask for mentoring. Too many people do this and that person will see you as someone with a straw, coming to draw. Instead, ask what you can do for them or better still, find out their interest via their social media presence, books or interviews and find a way you can help them achieve something. Everyone is looking for something, everyone needs something. Even Bill Gates!
                                            </p>
                                            <p className = "mt-2" >
                                            The key is to find out how you can be of service and then pitch to them. That's how to get into someone's inner circle. Stop saying "mentor me" and start saying "how can I be of service today?" Service is the fastest, the best, the surest route to long lasting, Earth shattering, impactful mentorship. Follow folks following fabulous goals, follow folks doing incredible things. If your mentality is to take, take and take, you will never reach the top. Even if you get there, someone will pull you down. Ensure you give as you grow. Don't be a parasite, be a channel. Don't be a parasite, be a pipe.
                                            </p>
                                            <p className = "mt-2 mb-4">
                                            Mentors will open doors for you, they will make recommendations for you. They will go out of their way to help you succeed. But first, you must be a good mentees. If the only time you reach out to people is when you need their help, you're a scam artist. See, following up(maintaining a good relationship) with key people in your life is tough. That's why you must have and maintain a very good relationship with people. For me, I have to sometimes schedule time in my calendar to call. 
                                            </p>
                                           
                                        </li>
                                    </ol>
                                </p>
                                <p>
                                    Stay in touch!
                                    Lead down to lift others up!
                                    Lead across to form a band of success chasers!
                                    And lead up to connect to greatness! 

                                    </p>
                                <p  className = "mt-2">
                               
                                </p>
                            </div>
                        </div>
                        <div className = "  text-gray-400  pb-10 pt-8 divdownpost">
                            <h2 className = {BlogStyle.next}>Read next post</h2>
                            <div className = "flex justify-around downpost mt-4  pt-10">
                                <div>
                                    <Link  href = "Depression-The-Subtle-Enemy"><a >
                                        <div className =  'flex justify-center ' ><img src = "/images/depression.jpg" className = {BlogStyle.img2} /></div>
                                        <div >
                                            <h2 className = {BlogStyle.blogtitle}> Depression -The Subtle Enemy</h2>
                                        </div>
                                       
                                    </a></Link>
                                </div>
                                <div className = "blog2">
                                    <Link href = "Tangible-impact-and-relevance"><a >
                                        <div className =  'flex justify-center ' ><img src = "/images/skills.jpg" className = {BlogStyle.img2} /></div>
                                        <div >
                                            <h2 className = {BlogStyle.blogtitle}>Tangible Impact And Relevance</h2>
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