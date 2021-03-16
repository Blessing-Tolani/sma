import Head from "next/head";
import React from "react";
import Footer from "../../components/footer2";
import Nav from "../../components/nav";

export default function Media() {
  return (
    <div>
      <Head>
        <title>Media</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Old+Standard+TT&family=Source+Sans+Pro&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className="grid-containeruse">
        <div className="bg-gray-200">
          <Nav />
        </div>
        <div className="bg-gray-200">
          <div className="w3-container bg-gray-200 flex justify-center">
            <div className="w3-col m6 ">
              <h3 className="text-3xl text-center bow ">Media</h3>
              <p className="details">
                This department create and develop all graphical designs and
                illustrations as at when requested, build and develop the
                organization’s blog/website, create motion graphics and video
                illustrations as at when requested, in charge of all media
                duties at program and events e.g photography, cinematography etc
              </p>
            </div>
          </div>
        </div>

        {/* Footer   */}
        <div className="bg-black">
          <Footer />
        </div>
      </div>
      <style jsx>{`
        .details {
          font-family: "Old Standard TT", serif;
          font-size: 20px;
        }
        .w3-col.m6 {
          width: 70%;
        }
        @media screen and (max-width: 992px) {
          .w3-col.m6 {
            width: 90%;
          }
        }

        body,
        html {
          height: 100%;
          line-height: 1.8;
        }

        .w3-container {
          padding-top: 8rem;
        }

        .w3-top {
          position: relative;
        }
        .bow {
          color: rgb(94, 5, 5);
          font-family: "Old Standard TT", serif;
        }

        .w3-bar .w3-button {
          padding: 18px;
        }
        .xee {
          padding-left: 25px;
        }

        a:hover {
          text-decoration: none;
        }

        .xee,
        .w3-button {
          transition: background 0.5s;
        }
        @media screen and (max-width: 700px) {
          .details {
            font-size: 17px;
          }
        }
      `}</style>
    </div>
  );
}
