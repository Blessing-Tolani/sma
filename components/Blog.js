import React from "react";

const blogInformation = [
  {
    fullBlog: "/blogpages/ile-ife-school-tour-2",
    alt: "Ile-Ife School tour",
    blogImage: "/images/IleIfeSchoolTour2/ifetour2c.jpeg",
    blogTitle: "School Tour at Oluorogbo High School, Ile Ife, Osun State",
    blogText: "A School Tour Adventure ",
  },
  {
    fullBlog: "/blogpages/ile-ife-school-tour-1",
    alt: "Ile-Ife School tour2",
    blogImage: "/images/IleIfeSchoolTour1/ifetour1a.jpeg",
    blogTitle:
      "School Tour at Seventh Day Adventist Secondary School Lagere, Ile Ife Osun State",
    blogText: "A School Tour Adventure ",
  },
  {
    fullBlog: "/blogpages/The-Equanimity-Of-Arts-Entertainment",
    alt: "article 1",
    blogImage: "/images/art.jpg",
    blogTitle: "The Equanimity Of Arts & Entertainment",
    blogText:
      "Entertainment is a form of activity that holds the attention and interest of an audience ",
  },
  {
    fullBlog: "/blogpages/The-Right-Relationship",
    alt: "article 2",
    blogImage: "/images/relationship.jpg",
    blogTitle: "The Right Relationship",
    blogText:
      'Relation"ships" are transportation devices that move you from your current location to your preferred destination ',
  },
  {
    fullBlog: "/blogpages/Depression-The-Subtle-Enemy",
    alt: "article 3",
    blogImage: "/images/depression.jpg",
    blogTitle: "Depression -The Subtle Enemy",
    blogText:
      "Most times, we are faced with vast circumstances which warrant speeches like, oh, I am tired, it's like I'm depressed or probably ",
  },
  {
    fullBlog: "/blogpages/Tangible-impact-and-relevance",
    alt: "article 4",
    blogImage: "/images/skills.jpg",
    blogTitle: "Tangible Impact And Relevance",
    blogText:
      "Impact and relevance bring about ANNOUNCEMENT via CHANGE and SOLUTIONS, whether wanted or not ",
  },
  {
    fullBlog: "/blogpages/Self-Worth",
    alt: "article 5",
    blogImage: "/images/worth.jpg",
    blogTitle: "Self Worth",
    blogText:
      "My dad once told me the reason why the Agama Lizard nods it's head frequently is a way of congratulating itself ",
  },
  {
    fullBlog: "/blogpages/The-Gum-on-the-Rock",
    alt: "article 6",
    blogImage: "/images/gum.jpg",
    blogTitle: "The Gum on the Rock",
    blogText:
      "Life is only meaningful when you do things with it. Impact is not just about breaking records or setting landmarks ",
  },
];

export default function Blog() {
  return (
    <>
      {blogInformation.map(
        ({ blogImage, blogTitle, blogText, fullBlog, alt }, index) => (
          <div className="w3-col s3 blog w3-card" key={index}>
            <a href={fullBlog}>
              <div>
                <img src={blogImage} alt={alt} />
              </div>
              <div className="details">
                <h2>{blogTitle}</h2>
                <p>
                  {blogText}
                  <a href={fullBlog} className="helplink text-sm">
                    Continue{" "}
                  </a>
                </p>
              </div>
            </a>
          </div>
        )
      )}
      <style jsx>{`
        .w3-card {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.18),
            0 1px 5px 0 rgba(0, 0, 0, 0.18) !important;
        }
        .helplink {
          border-bottom: 2px solid #808080;
          color: #808080;
        }

        .helplink:hover,
        .helplink:focus {
          border-bottom: 2px solid #a9a9a9;
          color: #a9a9a9;
        }

        .blog {
          margin: 1.666%;
          height: 40%;
        }
        .details {
          height: 200px;
          overflow: hidden;
          padding: 0px 10px;
        }

        .blog h2 {
          font-family: "Bodoni Moda", serif;
          font-size: calc(20px + 3 * (100vw - 400px) / 1000);
        }
        .blog p {
          font-family: "ABeeZee", sans-serif;
        }
        .w3-col.s3 {
          width: 30%;
        }
        img {
          height: 250px;
          width: 100%;
        }

        @media screen and (max-width: 900px) {
          .w3-col.s3 {
            width: 40%;
          }
          .blog {
            margin: 4%;
          }
        }
        @media screen and (max-width: 768px) {
          .w3-col.s3 {
            width: 42%;
          }
          .blog {
            margin: 3%;
          }
        }
        @media screen and (max-width: 600px) {
          .w3-col.s3 {
            width: 80%;
          }
          .blog {
            margin: 5% 10% 8% 10%;
          }
        }
        @media screen and (max-width: 500px) {
          .blog {
            height: 50%;
          }
        }

        @media screen and (max-width: 400px) {
          .w3-col.s3 {
            width: 95%;
          }
          .blog {
            height: 50%;
            margin: 5% 5% 8% 4%;
          }
        }
      `}</style>
    </>
  );
}
