import React from "react";
import Link from "next/link";

const tourPictures = [
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1a.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1b.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1c.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1d.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1e.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1f.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1g.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1h.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1i.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1j.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1k.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1l.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1m.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1n.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1o.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1p.jpeg",
  },
  {
    tourImage: "/images/IleIfeSchoolTour1/ifetour1q.jpeg",
  },
];

export default function IfeTour() {
  return (
    <>
      {tourPictures.map(({ tourImage }, index) => (
        <Link href="/entertainment/gallery/hangout" key={index}>
          <a>
            <div className="w3-col s3 blog cursor-default">
              <div>
                <img className="image" src={tourImage} alt="" />
              </div>
            </div>
          </a>
        </Link>
      ))}
      <style jsx>{`
        .blog-container {
          margin-left: 1.666% !important;
        }

        .blog {
          margin: 1.66%;
          height: 50%;
        }

        .blog h2 {
          font-family: "Bodoni Moda", serif;
          font-size: calc(18px + 5 * (100vw - 400px) / 1000);
        }
        .blog p {
          font-family: "ABeeZee", sans-serif;
        }
        .w3-col.s3 {
          width: 30%;
        }
        img {
          width: 100%;
          height: 300px;
          object-fit: fill;
        }

        @media screen and (max-width: 900px) {
          .w3-col.s3 {
            width: 40%;
          }
          .blog {
            margin: 4%;
          }
          img {
            height: 300px;
          }
          .blog-container {
            margin-left: 4% !important;
          }
        }
        @media screen and (max-width: 768px) {
          .w3-col.s3 {
            width: 42%;
          }
          .blog {
            margin: 3%;
          }
          .blog-container {
            margin-left: 3% !important;
          }
          img {
            height: 300px;
          }
        }
        @media screen and (max-width: 650px) {
          img {
            height: 300px;
          }
        }
        @media screen and (max-width: 600px) {
          .w3-col.s3 {
            width: 80%;
          }
          .blog-container {
            margin-left: 1% !important;
          }
          .blog {
            margin: 5% 10% 8% 10%;
          }
          img {
            height: 300px;
          }
          .blog-title {
            margin-left: 10% !important;
          }
        }
        @media screen and (max-width: 500px) {
          img {
            height: 300px;
          }
        }
        @media screen and (max-width: 400px) {
          .w3-col.s3 {
            width: 90%;
          }
          .blog {
            margin: 5% 5% 8% 4%;
          }

          .blog-title {
            margin-left: 5% !important;
          }
        }
      `}</style>
    </>
  );
}
