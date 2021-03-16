import Style from "../styles/index.module.css";
import React, { useState } from "react";

export default function Ignition() {
  const [Fullname, setFullname] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Location, setLocation] = useState("");
  const [School, setSchool] = useState("");
  const [Principal, setPrincipal] = useState("");
  const [PrincipalContact, setPrincipalContact] = useState("");
  const [Kin, setKin] = useState("");
  const [Relationship, setRelationship] = useState("");
  const [Ambitions, setAmbitions] = useState("");
  const [Level, setLevel] = useState("");

  const handleChange1 = (e) => {
    const level = e.target.value;
    console.log(level);
    setLevel(level);
  };

  const FORMSPARK_ACTION_URL = "https://submit-form.com/HvJzWTxE";

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
          Phone_Number: PhoneNumber,
          Location: Location,
          School: School,
          Principal: Principal,
          Principal_Contact: PrincipalContact,
          Kin: Kin,
          Relationship: Relationship,
          Ambitions: Ambitions,
          Level: Level,
        }),
      });
      alert("Ignition Form submitted");
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
          name="Ignition Form"
          onSubmit={onSubmit}
        >
          <input
            className=" in w3-padding-16"
            type="text"
            placeholder="Name of Student"
            required
            name="Name of Student"
            value={Fullname}
            onChange={(e) => setFullname(e.target.value)}
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

          <input
            className=" in w3-padding-16"
            type="text"
            placeholder="Name of School"
            required
            name="Name of School"
            value={School}
            onChange={(e) => setSchool(e.target.value)}
          />

          <input
            className=" in w3-padding-16"
            type="text"
            placeholder="Name of Principal"
            required
            name="Name of Principal"
            value={Principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />

          <input
            className="in w3-padding-16"
            type="number"
            name="Contact of Principal "
            placeholder="Contact of Principal"
            required
            value={PrincipalContact}
            onChange={(e) => setPrincipalContact(e.target.value)}
          />

          <input
            className=" in w3-padding-16"
            type="text"
            placeholder="Next of kin"
            required
            name="Next of kin"
            value={Kin}
            onChange={(e) => setKin(e.target.value)}
          />
          <input
            className=" in w3-padding-16"
            type="text"
            placeholder="Relationship with Next of kin"
            required
            name="Relationship with Next of kin"
            value={Relationship}
            onChange={(e) => setRelationship(e.target.value)}
          />
          <div className="flex wrip">
            <textarea
              placeholder="What are  your ambitions and aspirations ?"
              name="What are your ambitions and aspirations ?"
              required
              value={Ambitions}
              onChange={(e) => setAmbitions(e.target.value)}
            ></textarea>

            <div className="inliner">
              <p className="text-base">Class</p>
              <div className="ellow">
                <input
                  type="radio"
                  name="Class"
                  value="JSS1"
                  onChange={handleChange1}
                />
                <label for="JSS1"> JSS1</label>
                <br />
                <input
                  type="radio"
                  name="Class"
                  value="JSS2"
                  onChange={handleChange1}
                />
                <label for="JSS2"> JSS2</label>
                <br />
                <input
                  type="radio"
                  name="Class"
                  value="JSS3"
                  onChange={handleChange1}
                />
                <label for="JSS3"> JSS3</label>
              </div>
              <div className="ml-4 ellow">
                <input
                  type="radio"
                  name="Class"
                  value="SSS1"
                  onChange={handleChange1}
                />
                <label for="SSS1"> SSS1</label>
                <br />
                <input
                  type="radio"
                  name="Class"
                  value="SSS2"
                  onChange={handleChange1}
                />
                <label for="SSS2"> SSS2</label>
                <br />
                <input
                  type="radio"
                  name="Class"
                  value="SSS3"
                  onChange={handleChange1}
                />
                <label for="SSS3"> SSS3</label>
              </div>
            </div>
          </div>
          <br />

          <button className={Style.button2} type="submit" id="send">
            Send
          </button>
        </form>
      </div>
      <style jsx>{`
        .ellow {
          display: inline-block;
        }
        input:focus,
        textarea:focus {
          background-color: #e8f0fe;
        }
        #formdiv {
          width: 90%;
          margin: 0 auto;
        }
        .send {
          margin-top: 5px;
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
          margin: 2% 4%;
          padding-left: 20px;
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
          textarea,
          .inliner {
            width: 80%;
            margin: 4% auto;
            display: block;
          }

          .wrip {
            display: block;
          }
          #formdiv {
            width: 90%;
          }

          .br {
            display: none;
          }
        }
        @media screen and (max-width: 500px) {
          .in,
          textarea,
          .inliner {
            width: 90%;
          }
        }
        @media screen and (max-width: 400px) {
          .in,
          textarea,
          .inliner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
