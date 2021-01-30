import Style from "../styles/index.module.css";

export default function Upsurge(){

    return(
        <>
            <div id="formdiv" >
                <form
                  action="/success"
                  method="POST"
                  data-netlify="true"
                  name="Upsurge Form"
                >
                  <input type="hidden" name="form-name" value="Upsurge Form" />
                  <input
                    className=" in w3-padding-16"
                    type="text"
                    placeholder="Firstname Surname"
                    required
                    name="Full name"
                  />

                  <input
                    className="in w3-padding-16 "
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                    pattern="^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([A-Za-z]{3})$"
                  />

                  <input
                    className="in w3-padding-16"
                    type="number"
                    name="Phone Number "
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    className="in w3-padding-16 "
                    type="text"
                    name="Location"
                    placeholder="Location (City and Country)"
                    required
                  />

                  <textarea
                    placeholder="How did you hear about this program ?"
                    name="How did you hear about this program ?"
                    required
                  ></textarea>
                  <textarea
                    placeholder="What are your expectations from this program"
                    name="Expectations from this program"
                    required
                  ></textarea> <br className = "br" />
                <div className = "tagwrapper">
                  <div className="inliner special">
                    <p>Status</p>
                    <input type="radio" name="Status" value="Student" />
                    <label for="student"> Student</label>
                    <br />
                    <input type="radio" name="Status" value="Working class" />
                    <label for="Working-class"> Working class</label>
                    <br />
                  </div>

                  <div className="inliner ">
                    <p>Have you attended any previous edition ? </p>
                    <input
                      type="radio"
                      name="Attended any previous edition"
                      value="Yes"
                    />
                    <label for="yes"> Yes</label>
                    <br />
                    <input
                      type="radio"
                      name="Attended any previous edition"
                      value="No"
                    />
                    <label for="no"> No</label>
                    <br />
                  </div>
                </div>
                  <br />

                  <button className={Style.button2} type="submit" id = "send">
                    Send 
                  </button>
                </form>
              </div>
              <style jsx>{`
            #formdiv{
                width:90%;
                margin:0 auto;
            }
            .send{
                margin-top:5px;
            }
            input:focus,  textarea:focus {
              background-color:#e8f0fe;
            }
            .in {
                width: 42%;
                height: 50px;
                background-color: #f3f3f3;
                border-radius: 0.6em;
                padding: 20px;
                font-size: 14px;
                color: #053d59;
                font-family: "ABeeZee";
                display: inline-block;
                margin:1.5% 4%;
              
            }

            textarea {
                color: #053d59;
                font-family: "ABeeZee";
                margin:1.5% 4%;
                background-color: #f3f3f3;
                padding: 20px;
                width: 42%;
                height: 130px;
                font-size: 14px;
                border-radius: 0.6em;
            }

                .w3-modal {
                padding-top: 100px;
                display: block;

                }
              
            
                .inliner {
                display: inline-block;
                color:#053d59;
                font-family: 'ABeeZee';
                font-size: 14px;
                }
                .special{
                margin:1.5% 10% 1.5% 4%;
                }
               
                
                @media screen and (max-width:800px){
                    #formdiv{
                        width:100%;
                       
                    }
                    .in, textarea{
                        width:45%;
                        margin:1.5% 2.5%;
                    }
                    .special{
                        margin:1.5% 10% 1.5% 2.5%;
                    }
                    }
                @media screen and (max-width:600px){
                    .in{
                        height: 50px;
                    }
                    .in, textarea{
                        width:80%;
                        margin:4% auto;
                        display:block;
                    }
                    #formdiv{
                        width:90%;
                       
                    }
                    
             
                    .special{
                        margin:0%;
                    }
                    .inliner {
                        display: block;
                        margin:0% 0% 4% 3%;
                    }
                  
                    .tagwrapper{
                        width:80%;
                        margin:0 auto;
                       
                    }
                    .br{
                        display:none;
                    }
                }
                @media screen and (max-width:500px){
                    .in, textarea, .tagwrapper{
                        width:90%;
                    }
                }
                @media screen and (max-width:400px){
                    .in, textarea, .tagwrapper{
                        width:100%;
                    }
                }
        `}</style>
        </>
    )
}