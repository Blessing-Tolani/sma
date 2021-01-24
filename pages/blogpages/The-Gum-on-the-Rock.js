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
                <title>The Gum on the Rock</title>
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
                                <img src = "/images/whyte.jpeg" alt = "writer"   className=" w-32 rounded-full"/>
                            </div>
                            <div className = " pl-10 xl:pl-6 mt-1 text-gray-500">
                                <div className = "flex items-center mb-2">
                                    <AiOutlineUser/>
                                    <p className = "ml-2 inuse">Samuel Jegede</p>
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
                                <Link href = "The-Right-Relationship"><a >
                                   
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
                                <img src = "/images/whyte.jpeg" alt = "writer"   className=" w-24 tablet:w-32 rounded-full"/>
                            </div>
                            <div className = " text-gray-500  ml-2">
                                <div className = "mb-2">
                                    <p className = "ml-2 inuse">Samuel Jegede</p>
                                </div>
                                <div className = "" >
                                   
                                    <p className = "ml-2 inuse">Published January 2021</p>
                                </div>
                            </div>
                        </div>
                        <h6 className = "px-4 mobile:px-8 lg:pl-14">HUMANITY</h6>
                        <div className = "pt-4">
                            <div>                              
                                <div className = "flex justify-center">
                                    <img src = '/images/gum.jpg' className = {BlogStyle.picture} />
                                </div>
                                <h3 className = "mb-4 bheading  text-center">The Gum on the Rock</h3>
                            </div>
                            <div className = "btext text-sm mobile:text-base px-4 mobile:px-8 lg:px-14 my-4 ">
                                <p>
                                Life can be funny at times. It's like the story of a young boy who had a ball. Whenever he came to the playing field, others would come around and play with him. He was like a king and the football was his kingdom. If his team lost the match, the incoming team would need to add him to theirs because he was the boss. Whenever he got hungry and decides to join the queue to get a bottle of coke and cupcakes from the old lady of the minivan, the other kids wouldn't mind begging the adults in front to let him get his snacks and come back to the pitch. He was 'the-boy-with-the-ball."
                                </p>
                                <p className = "mt-2">
                                Life is only meaningful when you do things with it. You need look for a niche or area where you can pour out your humanity. Impact is not just about breaking records or setting landmarks, it's about dropping life and light wherever you go or whomever you meet that little remnant remains even after your passing away into glory. It doesn’t need to be much. You don’t need to be an Albert Einstein or Lady Theresa to make an impact, you only need to find where light is and lead others there. 
                                </p>
                                <p  className = "mt-2">
                                For the little boy, it was the happiness others felt and the joy of togetherness it brought with it. He could have stayed at home or even had just a small group but he wanted to share.
                                </p>
                                <p  className = "mt-2">
                                When we talk about impact, we cannot skip the subject of relevance. No matter how much you want to deny it, you need air to breathe. Relevance is about communicating life in a way that best defines or suit the needs of the moment. It is like branding, like the icing surrounding a sugar, the type of gown modern ladies wear or the latest beat that every ear now subscribes to.
                                </p>
                                <p className = "mt-2">
                                Impact is tasking. It can make you work tirelessly with little or nothing to show for it. It can make you spend the counting the stars and looking for a sport where a new planet can best be viewed from the earth and when you are done, you’d get a ‘congratulations’ or a small brown office file with some paper works and a neatly arranged set of currency that would last for a life time. Don’t get me wrong, it can make you a Bill Gates or an Obama but it’s far from that. You just want to leave a life that shows that you really care to raise seeds that will point to you as the one who brought them out of darkness in knowledge. 
                                </p>
                                <p className = "mt-2">
                                Sometimes you feel like it's not needed: "we can always do things individually, on our own, and we will be fine”, “We don't need to cross paths; we can maintain our separate lanes.” But you're wrong! The way we have things in common is the same way we have things uncommon.
                                </p>
                                <p className = "mt-2">
                                We do different things, read differently, want different things etc. If you were able to open up a person's heart, oh how different their treasures would have been from yours. Imagine if we all come together and pour out the treasures.You are not too young or old to impact others. What you need to do is to make it more accessible and relevant to them and you will be the answer to a generation's prayer. You will be the reason why they must see tomorrow; why they must be strong and courageous; why they must be up and running.
                                </p>
                                <p className = "mt-2">
                                You don't need to have much, all you need is to be like the child with the ball and watch how beautiful the world will be when you stand on the top of mountain and you look at the galaxies through a prism. 

                                </p>
                            </div>
                        </div>
                        <div className = "  text-gray-400  pb-10 pt-8 divdownpost">
                            <h2 className = {BlogStyle.next}>Read next post</h2>
                            <div className = "flex justify-around downpost mt-4  pt-10">
                                <div>
                                    <Link href = "The-Equanimity-Of-Arts-Entertainment"><a>
                                  
                                    <div className =  'flex justify-center ' ><img src = "/images/art.jpg" className = {BlogStyle.img} /></div>
                                      
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Equanimity Of Arts & Entertainment</h2>
                                    </div>
                                     </a></Link>
                                </div>
                                <div className = "blog2">
                                    <Link href = "The-Right-Relationship"><a>
                                   
                                    <div className =  'flex justify-center ' ><img src = "/images/relationship.jpg" className = {BlogStyle.img} /></div>
                                     
                                    <div >
                                        <h2 className = {BlogStyle.blogtitle}>The Right Relationship</h2>
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