
import Head from 'next/head'

export default function Success(){
    return(
        <>
            <Head>
                <title>Success</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </Head>
            <div className = "w3-container h-full h-screen  w-full flex ">
                <div className = "flex flex-col w-full justify-evenly ">
                    <div className = "    text-center md:pb-4  md:pt-4 ">
                        <h1 className = "  text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-serif">Response Recorded!</h1>
                        <h2 className = " text-lg sm:text-xl md:text-2xl lg:text-3xl   mb-4 font-serif">You will be contacted very soon</h2>
                        <p><a href = "/" className = "underline font-sans"  style = {{color:'#01B399'}}>Back to Home</a></p>
                    </div>
                    <div className = "  w-full flex justify-center">
                        <img src = "images/thank.jpg" className =  "imageo" />
                    </div>
                </div>
               
            </div> 



      
        </>
   
    )
}



// <div className="w3-top" id="home">
//         <div
//           className="w3-bar w3-card"
//           className="myNavbar"
//           style={{ boxShadow: "none" }}
//         >
//           <div className={Style.fulldiv}>
//             <img className={Style.pub} src="/images/loog2.png" />
//           </div>
//           <div className={Style.textdiv} id="toppo">
//             <div>
//               <h3 className="over">
//                 We Organize Training  <br />
//                 Programs as a means of fulfilling our mission
//               </h3>
//               {/* <p>Everyone has potentials for influence and it can be developed under the right atmosphere</p> */}
//             </div>
//           </div>

//           <div
//             className="w3-right w3-hide-small boye"
//             style={{ display: "block !important" }}
//           >
//             <a href="/" className="w3-bar-item w3-button xee">
//               {" "}
//               Home
//             </a>
//             <a href="/blog" className="w3-bar-item w3-button xee">
//               {" "}
//               Blog
//             </a>
//             <a href="/gallery" className="w3-bar-item w3-button xee">
//               {" "}
//               Gallery
//             </a>
//           </div>

//           <span
//             className="w3-bar-item w3-right w3-hide-large w3-hide-medium free"
//             onClick={toggleMenu}
//           >
//             <div className={`${menuIsOpen ? "newclass" : "burger"} ...rest`}>
//               <div className="line1"></div>
//               <div className="line2"></div>
//               <div className="line3"></div>
//             </div>
//           </span>
//         </div>

//         <span className={`${menuIsOpen ? "open" : "closed"} ...rest`}>
//           <nav class="w3-sidebar fro w3-bar-block w3-animate-left w3-hide-medium w3-hide-large w3-center">
//             <a
//               href="/"
//               onClick={toggleMenu}
//               className="w3-button w3-hover-white"
//               style={{ width: "100%", color: "white" }}
//             >
//               <p>Home</p>
//             </a>
//             <a
//               href="/blog"
//               onClick={toggleMenu}
//               className="w3-button w3-hover-white"
//               style={{ width: "100%", color: "white" }}
//             >
//               <p>Blog</p>
//             </a>
//             <br />
//             <a
//               href="/gallery"
//               onClick={toggleMenu}
//               className="w3-button w3-hover-white"
//               style={{ width: "100%", color: "white" }}
//             >
//               <p>Gallery</p>
//             </a>
//             <br />
//           </nav>
//         </span>
//       </div>