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
                <title>Self Worth</title>
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
                                <img src = "/images/eniola.jpg" alt = "writer"   className=" w-32 rounded-full"/>
                            </div>
                            <div className = " pl-10 xl:pl-6 mt-1 text-gray-500">
                                <div className = "flex items-center mb-2">
                                    <AiOutlineUser/>
                                    <p className = "ml-2 inuse">Eniola Olasogba</p>
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
                                <Link href = "The-Gum-on-the-Rock"><a>
                                   
                                   <div >
                                       <h2 className = {BlogStyle.blogtitle}>The Gum on the Rock</h2>
                                   </div>
                                   <div className =  'flex justify-center ' ><img src = "/images/gum.jpg" className = {BlogStyle.img} /></div>
                               </a></Link>
                            </div>
                            <div className = "mt-10">
                                <Link href = "The-Equanimity-Of-Arts-Entertainment"><a >
                                   
                                   <div >
                                       <h2 className = {BlogStyle.blogtitle}>The Equanimity Of Arts & Entertainment</h2>
                                   </div>
                                   <div className =  'flex justify-center ' ><img src = "/images/art.jpg" className = {BlogStyle.img} /></div>
                               </a></Link>
                            </div>
                            <div className = "mt-10">
                                <Link  href = "The-Right-Relationship"><a>
                                   
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Right Relationship</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/relationship.jpg" className = {BlogStyle.img} /></div>
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
                        </div>
                    </div>

                    <div className = "bmain  text-gray-200">
                        <div className = " px-4 mobile:px-8 lg:px-14 flex   h-40 pt-10 items-center divuppost">
                            <div className = "">
                                <img src = "/images/eniola.jpg" alt = "writer"   className=" w-24 tablet:w-32 rounded-full"/>
                            </div>
                            <div className = " text-gray-500  ml-2">
                                <div className = "mb-2">
                                    <p className = "ml-2 inuse">Eniola Olasogba</p>
                                </div>
                                <div className = "" >
                                   
                                    <p className = "ml-2 inuse">Published January 2021</p>
                                </div>
                            </div>
                        </div>
                        <h6 className = "px-4 mobile:px-8 lg:pl-14 text-base">PERSONAL EFFECTIVENESS</h6>
                        <div className = "pt-4">
                            <div>                              
                                <div className = "flex justify-center">
                                    <img src = '/images/worth.jpg' className = {BlogStyle.picture} />
                                </div>
                                <h3 className = "mb-4 bheading  text-center">Self Worth</h3>
                            </div>
                            <div className = "btext text-sm mobile:text-base px-4 mobile:px-8 lg:px-14 my-4 ">
                                <p>
                                My dad once told me the reason why Agama Lizard nods it's head frequently is a way of congratulating itself when ever he jumps down from a high place or climbs a high place. It is saying "Weldone, I have done well".
                                </p>
                                <p className = "pt-2">
                                Sadness is entirely different from depression, It is a symptom of depression. It is a normal emotion that is triggered by specific adverse event or bad experience. 
                                This emotions overtime dissipate when normalcy is restored, making the individual stable again and back to living his normal life.
                                </p>
                                <p  className = "pt-2">
                                In our society of today self confidence and self awareness is the key to unlocking so many opportunities.
                                </p>
                                <p  className = "mt-4">
                                Self worth is an internal state of being that comes from self understanding, self love and self acceptance.
                                The question now is : How Do You View YOURSELF?
                                Do you see yourself in the light of what others say? Do you feel you are not really important and nothing you do matters? Do you even think you deserve happiness, health, wealth, success or even Love?      
                                </p>                           
                                <p className = "pt-2">
                                Having a high level of self worth helps you sail through life irrespective of how you feel, what they said or what you did. It is loving yourself no matter the obstacles you face. High level of Self worth is picking yourself up, dusting your bottoms and saying to yourself "I can do better" anytime you fail and not crash and burn.
                                </p>
                                <p className = "pt-2">
                                It is giving yourself a good Pat at the back and congratulating yourself when you achieve something good no matter how small or large it may seem. Most people in our society have low level of self worth. 
                                This might be because of:
                                <ol className = "pt-2 pb-2">
                                    <li>✨High rate of failure in the past.</li>
                                    <li>✨Lack of life from those around them (parents, spouse, colleagues etc) </li>
                                    <li>✨Lack of confidence in one's self</li>
                                    <li>✨Mental illness like anxiety disorders or depression. </li>
                                    <li>✨Chronic disease like cancer, sickle cell, HIV/Aids can reduce a person's self worth. </li>
                                </ol>
                                </p>
                                
                                <p >
                                BUILDING HIGH LEVEL OF SELF WORTH <br />
                                Self worth involves accepting yourself wholeheartedly at all times despite your flaws, weaknesses and limitations. It is recognizing the real value of who you are.
                                Building yourself worth includes but are not limited to the following:
                                </p>
                                <p className = "pt-2">
                                Step 1: Use positive affirmations correctly
                                Saying positive things to yourself helps motivate you mentally and emotionally.
                                 Imagine waking up in the morning going to the mirror and saying to yourself: 
                                 <ol>
                                     <li>I'm bold and beautiful.</li>
                                     <li>I'm made for greater things.</li>
                                     <li>Nothing can drag me down.</li>
                                     <li>I walk into a room and I command attention.</li>
                                 </ol>
                                </p>
                                <p>
                                The human brain works in a funny way, when you say these things consistently it begins to sink into your core, every nerve cells in your skin begin to absorb it, you start to believe it and then it becomes your reality.Don't undermine the power of words. I always tell my friends "If I don't hype myself, who will?"
                                </p>
                                <p className = "pt-2">
                                Step 2: Identify your competencies and develop them.
                                <p className = "pb-2">
                                Find what you are good at, what area you excel in, what you enjoy doing, what you  do with ease. When you find them, build and  capitalize on them. This does not mean that you should neglect and forget your weaknesses. No infact you should work harder and make that weakness your strength but remember Never put yourself down while trying to build yourself up.
                                </p>
                                </p>
                                <p >
                                Step 3: Learn to Accept Compliments.
                                <p>
                                Accepting compliment is not a crime. It doesn't make you proud. You are simply receiving accolades for a job well done. Compliments have a way of putting a smile on your face and push you to work harder. So accept them. It's your Right. You deserve it
                                </p>
                                </p>
                                <p className = "pt-2 pb-2">
                                Step 4: Eliminate Self Criticism and Introduce Self Compassion.
                                <p className = "pb-2">
                                Like I said earlier, When trying to build yourself up, never put yourself down. Acknowledge your faults and weaknesses but don't let it weigh you down. Instead ride on the storm and soar higher. Look at yourself from the place of compassion not criticism.
                                </p>
                                </p>
                                <p className = "pb-2">
                                Step 5: Affirm your Real Worth.
                                <p>
                                Affirm and reaffirm your worth. Shout it from the roof top. Know that you are one in a million, you are one of a kind. There is no two kinds of you. You are Special. You are Unique. You are Original. Embrace yourself. Embrace your worth. Most especially practice Self-Love.
                                </p>
                                </p>
                                
                            </div>
                        </div>
                        <div className = "  text-gray-400  pb-10 pt-8 divdownpost">
                            <h2 className = {BlogStyle.next}>Read next post</h2>
                            <div className = "flex justify-around downpost mt-4  pt-10">
                                <div>
                                <Link href = "The-Gum-on-the-Rock"><a >
                                   
                                   <div >
                                       <h2 className = {BlogStyle.blogtitle}>The Gum on the Rock</h2>
                                   </div>
                                   <div className =  'flex justify-center ' ><img src = "/images/gum.jpg" className = {BlogStyle.img} /></div>
                               </a></Link>
                                </div>
                                <div className = "blog2">
                                    <Link href = "The-Equanimity-Of-Arts-Entertainment"><a >
                                    
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Equanimity Of Arts & Entertainment</h2>
                                    </div>
                                    <div className =  'flex justify-center ' ><img src = "/images/art.jpg" className = {BlogStyle.img} /></div>
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