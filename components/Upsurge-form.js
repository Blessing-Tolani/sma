import Style from "../styles/index.module.css";
import React, { useState } from "react";

export default function Upsurge() {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Location, setLocation] = useState("");
  const [HearFrom, setHearFrom] = useState("");
  const [Expectations, setExpectations] = useState("");
  const [Status, setStatus] = useState("");
  const [PreviousAttendee, setPreviousAttendee] = useState("");

  const handleChange1 = (e) => {
    const status = e.target.value;
    console.log(status);
    setStatus(status);
  };

  const handleChange2 = (e) => {
    const attendedbefore = e.target.value;
    console.log(attendedbefore);
    setPreviousAttendee(attendedbefore);
  };

  const FORMSPARK_ACTION_URL = "https://submit-form.com/6KpdnCbB";

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
          Where_did_you_hear_from: HearFrom,
          Expectations_from_this_program: Expectations,
          Work_Status: Status,
          Attended_Before: PreviousAttendee,
        }),
      });
      alert("Form submitted");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div id="formdiv">
        <form
          action="/success"
          method="POST"
          name="Upsurge Form"
          onSubmit={onSubmit}
        >
          <input
            className=" in w3-padding-16"
            type="text"
            placeholder="Firstname Surname"
            required
            name="Full name"
            value={Fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            className="in w3-padding-16 "
            type="text"
            placeholder="Email"
            required
            name="Email"
            pattern="^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([A-Za-z]{3})$"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="in w3-padding-16"
            type="number"
            name="Phone Number "
            placeholder="Phone Number"
            required
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="in w3-padding-16 "
            type="text"
            name="Location"
            placeholder="Location (City and Country)"
            required
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <textarea
            placeholder="How did you hear about this program ?"
            name="How did you hear about this program ?"
            required
            value={HearFrom}
            onChange={(e) => setHearFrom(e.target.value)}
          ></textarea>
          <textarea
            placeholder="What are your expectations from this program"
            name="Expectations from this program"
            required
            value={Expectations}
            onChange={(e) => setExpectations(e.target.value)}
          ></textarea>{" "}
          <br className="br" />
          <div className="tagwrapper">
            <div className="inliner special">
              <p>Status</p>
              <input
                type="radio"
                name="Status"
                value="Student"
                id="student"
                onChange={handleChange1}
              />
              <label for="student"> Student</label>
              <br />
              <input
                type="radio"
                name="Status"
                value="Working class"
                id="workingclass"
                onChange={handleChange1}
              />
              <label for="workingclass"> Working class</label>
              <br />
            </div>

            <div className="inliner ">
              <p>Have you attended any previous edition ? </p>
              <input
                type="radio"
                name="Attended any previous edition"
                value="Yes"
                id="yes"
                onChange={handleChange2}
              />
              <label for="yes"> Yes</label>
              <br />
              <input
                type="radio"
                name="Attended any previous edition"
                value="No"
                id="no"
                onChange={handleChange2}
              />
              <label for="no"> No</label>
              <br />
            </div>
          </div>
          <br />
          <button className={Style.button2} type="submit" id="send">
            Send
          </button>
        </form>
      </div>
      <style jsx>{`
        #formdiv {
          width: 90%;
          margin: 0 auto;
        }
        .send {
          margin-top: 5px;
        }
        input:focus,
        textarea:focus {
          background-color: #e8f0fe;
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
          margin: 1.5% 4%;
        }

        textarea {
          color: #053d59;
          font-family: "ABeeZee";
          margin: 1.5% 4%;
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
          color: #053d59;
          font-family: "ABeeZee";
          font-size: 14px;
        }
        .special {
          margin: 1.5% 10% 1.5% 4%;
        }

        @media screen and (max-width: 800px) {
          #formdiv {
            width: 100%;
          }
          .in,
          textarea {
            width: 45%;
            margin: 1.5% 2.5%;
          }
          .special {
            margin: 1.5% 10% 1.5% 2.5%;
          }
        }
        @media screen and (max-width: 600px) {
          .in {
            height: 50px;
          }
          .in,
          textarea {
            width: 80%;
            margin: 4% auto;
            display: block;
          }
          #formdiv {
            width: 90%;
          }

          .special {
            margin: 0%;
          }
          .inliner {
            display: block;
            margin: 0% 0% 4% 3%;
          }

          .tagwrapper {
            width: 80%;
            margin: 0 auto;
          }
          .br {
            display: none;
          }
        }
        @media screen and (max-width: 500px) {
          .in,
          textarea,
          .tagwrapper {
            width: 90%;
          }
        }
        @media screen and (max-width: 400px) {
          .in,
          textarea,
          .tagwrapper {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
