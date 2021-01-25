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
                <title>Depression -The Subtle Enemy</title>
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
                                <img src = "/images/peace.jpeg" alt = "writer"   className=" w-32 rounded-full"/>
                            </div>
                            <div className = " pl-10 xl:pl-6 mt-1 text-gray-500">
                                <div className = "flex items-center mb-2">
                                    <AiOutlineUser/>
                                    <p className = "ml-2 inuse">Deborah Adefehinti </p>
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
                            <div className = "mt-10">
                                <Link href = "The-Gum-on-the-Rock"><a >
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Gum on the Rock</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/gum.jpg" className = {BlogStyle.img} /></div>
                                </a></Link>
                            </div>
                            <div className = "mt-10">
                                <Link href = "The-Right-Relationship"><a >
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Right Relationship</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/relationship.jpg" className = {BlogStyle.img} /></div>
                                </a></Link>
                            </div>
                        </div>
                    </div>

                    <div className = "bmain  text-gray-200">
                        <div className = " px-4 mobile:px-8 lg:px-14 flex   h-40 pt-10 items-center divuppost">
                            <div className = "">
                                <img src = "/images/peace.jpeg" alt = "writer"   className=" w-24 tablet:w-32 rounded-full"/>
                            </div>
                            <div className = " text-gray-500  ml-2">
                                <div className = "mb-2">
                                    <p className = "ml-2 inuse">Deborah Adefehinti</p>
                                </div>
                                <div className = "" >
                                   
                                    <p className = "ml-2 inuse">Published January 2021</p>
                                </div>
                            </div>
                        </div>
                        <h6 className = "px-4 mobile:px-8 lg:pl-14">HEALTH</h6>
                        <div className = "pt-4">
                            <div>                              
                                <div className = "flex justify-center">
                                    <img src = '/images/depression.jpg' className = {BlogStyle.picture} />
                                </div>
                                <h3 className = "mb-4 bheading  text-center">Depression - The Subtle Enemy</h3>
                            </div>
                            <div className = "btext text-sm mobile:text-base px-4 mobile:px-8 lg:px-14 my-4 ">
                                <p>
                                Most times, we are faced with vast circumstances which warrant speeches like, oh, I am tired, it's like I'm depressed or probably, we lost a loved one and our countenance change. We begin to say I'm depressed. However,  what we always term as depression is not actually depression in the real sense but sadness.
                                It's okay to feel sad when things don't go as expected. But how we react to it is what matters.
                                </p>
                                <p className = "mt-2">
                                Sadness is entirely different from depression, It is a symptom of depression. It is a normal emotion that is triggered by specific adverse event or bad experience. 
                                This emotions overtime dissipate when normalcy is restored, making the individual stable again and back to living his normal life.
                                </p>
                                <p  className = "mt-2">
                                On the flip side, depression is a serious mental disorder, an abnormal mental and emotional state, which affects the smooth running of our life.
                                It delves deep into every nook and cranny of our lives, not just our mental health. It retards our productivity. Things we used to enjoy and loved and passionate about  now becomes irritable to us.
                                Assumptions are that depression is a choice or state of mind. This is misinterpreted as it is not but a mental illness.
                                </p>
                                <p  className = "mt-4">
                                There are 2 major types of depression:
                                <ol>
                                    <li>Major depressive disorder (MDD)</li>
                                    <li>Persistent depressive disorder (PDD)</li>
                                </ol>
                                <p className = "mt-2">
                                Major depressive disorder: This is a severe form of depression characterised by persistent feeling of sadness, hopelessness and worthlessness. To be diagnosed with this clinical depression, you must experience some symptoms listed below:
                                <ol className = "mt-2">
                                    <li>✨Feeling depressed almost everyday. </li>
                                    <li>✨Loss of interest in activities.  </li>
                                    <li>✨recurring thoughts of death or suicidal thoughts. </li>
                                </ol>                        
                                </p>
                                <p className = "mt-2">
                                Persistent depressive disorder: Also known as dysthymia. It's a chronic form of depression. Symptoms that must show up before one is diagnosed with this kind of depression:
                                <ol className = "mt-2">
                                    <li>✨It must be persistent for at least 2 years.</li>
                                    <li>✨Feeling hopeless with low self esteem. </li>
                                </ol>
                                </p>
                                </p>
                                <p className = "mt-4 mb-4">
                                HOW IT CREEPS IN: 
                                It can occur for a variety of reasons and it has many triggers ranging from stressful events such as bereavement or relationship breakdown to personality, family history, pregnancy, loneliness, alcohols & drugs and long-term illness.
                                </p>
                                <p>
                                    HOW TO NIP IT AT THE BUD
                                    <ol>
                                        <li>
                                        ✨Identify your stressors: Stressors are a way of life, we can't do without them. However, how we react to them is what matters.
                                        </li>
                                        <li>
                                        ✨Sleep well and have regular exercise. 
                                        </li>
                                        <li>
                                        ✨Vent out to trusted friends or families when you're not feeling well
                                        </li>
                                        <li>
                                        ✨Learn to relax and be kind to yourself: Always give yourself a nice treat when you've just got a big win. Celebrate yourself. 
                                        </li>
                                        <li>
                                        ✨Know yourself: what stirs you up and makes you happy and otherwise.
                                        </li>
                                        <li>
                                        ✨Join support groups.
                                        </li>
                                        <li>
                                        ✨Keep a journal: Let out your emotions by keeping a pen and a jotter.
                                        </li>
                                    </ol>
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
            </div>
        )
}