import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "../../components/nav3";
import Footer from "../../components/footer";

export default function Volunteer() {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Location, setLocation] = useState("");
  const [Strengths, setStrengths] = useState("");
  const [Weakness, setWeakness] = useState("");
  const [ReasonForVolunteering, setReasonForVolunteering] = useState("");
  const [Skills, setSkills] = useState("");
  const [Gender, setGender] = useState("");
  const [VolunteeredBefore, setVolunteeredBefore] = useState("");
  const [Department, setDepartment] = useState("");
  const [Duration, setDuration] = useState("");

  const handleChange1 = (e) => {
    const gender = e.target.value;
    console.log(gender);
    setGender(gender);
  };

  const handleChange2 = (e) => {
    const volunteeredbefore = e.target.value;
    console.log(volunteeredbefore);
    setVolunteeredBefore(volunteeredbefore);
  };

  const handleChange3 = (e) => {
    const department = e.target.value;
    console.log(department);
    setDepartment(department);
  };

  const handleChange4 = (e) => {
    const duration = e.target.value;
    console.log(duration);
    setDuration(duration);
  };

  const FORMSPARK_ACTION_URL = "https://submit-form.com/YGqRhTZc";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Full_name: Fullname,
          Email_Address: Email,
          Phone_Number: PhoneNumber,
          Contact_Address: Location,
          Strengths: Strengths,
          Weakness: Weakness,
          Reason_for_volunteering: ReasonForVolunteering,
          Skills: Skills,
          Gender: Gender,
          Volunteered_before: VolunteeredBefore,
          Department: Department,
          Duration: Duration,
        }),
      });
      alert("Form submitted");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="body">
      <Head>
        <title>Volunteer with us</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Pacifico&family=Bodoni+Moda&family=Noto+Serif+JP&family=Amaranth&family=Source+Sans+Pro&family=Open+Sans&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia&family=Old+Standard+TT&family=Roboto+Slab&family=Lato:ital@1&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <Nav />
      <div className="w3-container intro-container pt-2">
        <div>
          <h5>Our Teams</h5>
          <h2 id="touch">Each Team delivers first-class service</h2>
        </div>
        <div>
          <div className="text-gray-500 font-extralight py-4">
            <p>
              We carry out our duties with an excellent and committed spirit
            </p>
            <p className="py-2 text-sm text-gray-500 bg-white w-auto">
              {" "}
              Check our Teams
            </p>
          </div>
          <div className="w-full pt-4 sm:pt-8 pb-12">
            <div className="team-container flex  w-full justify-around ">
              <Link href="/team/content-and-communications">
                <a>
                  <div className="teambox  flex items-center justify-center shadow-md text-gray-900">
                    Content and <br className="break" /> Communications
                  </div>
                </a>
              </Link>
              <Link href="/team/strategy-and-logistics">
                <a>
                  <div className="teambox  flex items-center justify-center shadow-md text-gray-900">
                    Strategy and <br className="break1" /> Logistics
                  </div>
                </a>
              </Link>
              <Link href="/team/media">
                <a>
                  <div className="teambox flex items-center justify-center shadow-md text-gray-900">
                    Media
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w3-container ">
        <h2 id="touch" className="text-center">
          Volunteer with us
        </h2>
      </div>
      {/* Volunteer form */}
      <div className="w3-container  cont flex items-center ">
        <div className="w3-col s6  formdiv flex ">
          <form
            action="/success"
            className=" formhead "
            method="POST"
            name="Volunteer Form"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="Firstname Surname"
              placeholder="Firstname Surname"
              required=""
              className="input"
              value={Fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              className="input"
              type="email"
              name="Email"
              placeholder="Email"
              required=""
              pattern="^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([A-Za-z]{3})$"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br className="br" />
            <input
              className="input"
              type="text"
              name="Location"
              placeholder="Location (City and Country)"
              required
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              className="input"
              type="number"
              name="Whatsapp Number "
              placeholder="Phone Number (Whatsapp)"
              required
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />{" "}
            <br className="br" />
            <textarea
              placeholder="What are your strengths ?"
              name="Strengths"
              required
              value={Strengths}
              onChange={(e) => setStrengths(e.target.value)}
            ></textarea>
            <textarea
              placeholder="What do you consider to be your weakness(es) ?"
              name="Weakness(es)"
              required
              value={Weakness}
              onChange={(e) => setWeakness(e.target.value)}
            ></textarea>{" "}
            <br className="br" />
            <textarea
              placeholder="Why wil you like to volunteer with us ?"
              name="Reason for Volunteering"
              required
              value={ReasonForVolunteering}
              onChange={(e) => setReasonForVolunteering(e.target.value)}
            ></textarea>
            <textarea
              placeholder="What skills do you have ?"
              name="Skills"
              required
              value={Skills}
              onChange={(e) => setSkills(e.target.value)}
            ></textarea>{" "}
            <br className="br" />
            <div className="inline special">
              <p>Gender</p>
              <input
                type="radio"
                name="Gender"
                value="Male"
                onChange={handleChange1}
              />
              <label for="male"> Male</label>
              <br />
              <input
                type="radio"
                name="Gender"
                value="Female"
                onChange={handleChange1}
              />
              <label for="female"> Female</label>
              <br />
            </div>
            <div className="inline ">
              <p>Have you volunteered in an organization before ? </p>
              <input
                type="radio"
                name="Volunteered before"
                value="Yes"
                onChange={handleChange2}
              />
              <label for="yes"> Yes</label>
              <br />
              <input
                type="radio"
                name="Volunteered before"
                value="No"
                onChange={handleChange2}
              />
              <label for="no"> No</label>
              <br />
            </div>
            <div className="flex bow ">
              <div className=" inline but">
                <p> What department will you like to volunteer with?</p>
                <input
                  type="radio"
                  name="Department"
                  value="Content and Communications"
                  onChange={handleChange3}
                />
                <label for="department1"> Content and Communications</label>
                <br />
                <input
                  type="radio"
                  name="Department"
                  value="Strategy and Logistics"
                  onChange={handleChange3}
                />
                <label for="department2"> Strategy and Logistics</label>
                <br />
                <input
                  type="radio"
                  name="Department"
                  value="Media"
                  onChange={handleChange3}
                />
                <label for="department3"> Media</label>
                <br />
              </div>

              <div className="inline but">
                <p>How long will you like to volunteer with us ?</p>
                <input
                  type="radio"
                  name="Duration"
                  value="3 Months"
                  onChange={handleChange4}
                />
                <label for="duration1"> 3 Months</label>
                <br />
                <input
                  type="radio"
                  name="Duration"
                  value="6 Months"
                  onChange={handleChange4}
                />
                <label for="duration2"> 6 Months</label>
                <br />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" id="button" className="onebutton">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w3-col s6 flex items-center order">
          <img src="/images/volunteer.jpg" alt="" />
        </div>
      </div>

      {/* Footer   */}
      <Footer />

      <style jsx>{`
        .break,
        .break1 {
          display: none;
        }
        .w3-button:hover {
          color: white !important;
          background-color: black !important;
        }
        .teambox {
          width: 16rem;
          height:10rem;
          cursor:pointer;
          background-color: #e8f0fe;
        }
        .teambox:hover{
          transform:scale(0.9);
        }
      
        .team-container > div {
          border: 1px solid #e8f0fe;
          background-color: #e8f0fe;
        }
        #touch {
          font-family: "Sofia", cursive;
        }
        input:focus,
        textarea:focus {
          background-color: #e8f0fe;
        }
        .onebutton {
          margin: 0 auto;
          font-family: "ABeeZee";
          color: #053d59;
          font-size: 15px;
          padding: 8px 22px;
          border-top: 1px solid #053d59;
          border-right: 1px solid #053d59;
          border-bottom: 1px solid #053d59;
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
        }
        .onebutton:hover,
        .onebutton:focus {
          border-top: 1px solid #808080;
          border-right: 1px solid #808080;
          border-bottom: 1px solid #808080;
          color: #808080;
        }
        .inline {
          display: inline-block;
        }
        .inline,
        .but {
          margin: 10px 2.5%;
          font-family: "ABeeZee";
          font-size: 14px;
          color: #053d59;
        }
        .special {
          width: 20%;
        }

        .formdiv {
        }
        .formhead {
          width: 100%;
        }
        .input {
          width: 45%;
          height: 40px;
          border: 1px solid #f3f3f3;
          background-color: #f3f3f3;
          border-radius: 0.6em;
          padding: 20px;
          margin: 10px 2.5%;
          font-family: "ABeeZee";

          font-size: 14px;
          color: #053d59;
        }
        .intro-container {
          margin: 0px 2%;
          font-family: "ABeeZee";
        }
        .intro-container h5 {
          font-family: "ABeeZee";
        }
        textarea {
          color: #053d59;
          font-family: "ABeeZee";
          border: 1px solid #f3f3f3;
          background-color: #f3f3f3;
          border-radius: 0.6em;
          padding: 20px;
          margin: 10px 2.5%;
          width: 45%;
          height: 120px;
          font-size: 14px;
        }
        .w3-hide-large {
          display: none;
        }
        div.PD {
          margin-bottom: -9px;
        }
        .mug {
          border-radius: 50%;
          padding: 8px 16px;
        }
        .xee {
          padding: 10px;
          color: #c0c0c0;
          margin-left: 30px;
        }

        .fulldiv {
          padding-left: 0px;
        }
        .pub {
          width: 60px;
          height: 60px;
          position: relative;
          padding-top: 0px;
        }
        .w3-top {
          position: relative;
        }
        .topdiv {
          height: 60px;
          padding-right: 30px;
        }

        @media screen and (min-width: 600px) {
          .blog-title {
            text-align: center;
            font-size: calc(40px + 15 * (100vw - 600px) / 1000);
          }
        }
        @media screen and (max-width: 1000px) {
          .input,
          textarea {
            padding: 10px;
          }
        }
        @media screen and (max-width: 950px) {
          .w3-col.s6 {
            width: 100%;
          }
          .formdiv {
            order: 2;
          }
          .order {
            order: 1;
          }
          .break {
            display: block;
          }
           .cont {
            flex-direction: column !important;
            align-items: center;
          }
          .formdiv {
            width: 90% !important;
          }
          .input,
          textarea {
            padding: 20px;
            width: 48%;
            margin: 10px 1%;
          }
          .intro-container {
            margin: 0px 1%;
          }
          .teambox {
            width: 13rem;
          }
        }
        @media screen and (max-width: 768px) {
          .formdiv {
            width: 100% !important;
          }
        }
        @media screen and (max-width: 700px) {
          .teambox {
            width: 10rem;
            height:10rem;

          }
        .break1 {
          display: block;
        }
        .w3-
        }
        @media screen and (max-width: 600px) {
          .input,
          textarea {
            display: block;
            padding: 20px;
            width: 90%;
            margin: 15px 0%;
          }
         .team-container{
          
           flex-direction:column;
           
         }
         .teambox {
          width: 70%;
          height:10rem;
          margin:0 auto 20px;

        }
        .break ,.break1{
          display:none;
        }
          .intro-container {
            margin: 0px 0%;
          }
          .br {
            display: none;
          }
          .xee {
            margin-left: 10px;
          }
          .bow {
            flex-direction: column;
          }
        }
        @media screen and (max-width: 500px) {
          .xee {
            margin-left: 0px;
            font-size: 15px !important;
          }
          .special {
            width: 100%;
          }
          #touch {
            font-size: 25px;
          }
          .teambox {
            width: 80%;
  
          }
        }
        @media screen and (max-width: 400px) {
          .input,
          textarea {
            width: 100%;
          }
          .teambox {
            width: 90%;
       
  
          }

          .xee {
            font-size: 14px !important;
          }
          .topdiv {
            padding-right: 0px;
          }
        }
        @media screen and (max-width: 330px) {
          .pub {
            width: 40px;
            height: 40px;
          }
          .topdiv {
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}
