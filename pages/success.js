
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
                {/* <div className ="flex flex-col w-full bg-yellow-100 items-align" >
                    <div className = "flex flex-row justify-center items-center w-1/2 h-screen text-center">
                        <div className = " text-xl w-full bg-pink-900">
                            <h1 className = "mb-10">Response Recorded!</h1>
                            <h2 className = "mb-10">You will be contacted very soon</h2>
                            <a href = "/" className = "underline"><p>Back to Home</p></a>
                        </div>
                    </div>
                    <div className = "w-1/2  flex bg-red-700">
                        <img src = "images/thank.jpg" />
                    </div>
                   
                   
                </div>  */}
            </div> 



      
        </>
   
    )
}