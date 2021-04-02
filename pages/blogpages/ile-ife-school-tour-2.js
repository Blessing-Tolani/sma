import Head from "next/head";
import Link from "next/link";
import BlogStyle from "../../styles/blog.module.css";
import Footer from "../../components/footer3";
import Nav from "../../components/nav2";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

export default function Art() {
  return (
    <div className="body">
      <Head>
        <title>School Tour at Oluorogbo High School</title>
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Bodoni+Moda&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <Nav />
      {/* document body */}

      <div className="bodywrapper  flex ">
        <div className="bside  pt-20 ">
          <div className="">
            <div className=" h-48 w-full flex justify-center items-center">
              <img
                src="/images/bloglogo.jpg"
                alt="writer"
                className=" w-32 rounded-full"
              />
            </div>
            <div className=" pl-10 xl:pl-6 mt-1 text-gray-500">
              <div className="flex items-center mb-2">
                <AiOutlineUser />
                <p className="ml-2 inuse">SMA Impact Network</p>
              </div>
              <div className="flex items-center">
                <BiCalendar />
                <p className="ml-2 inuse">Published April 2021</p>
              </div>
            </div>
          </div>
          <div className=" mt-8 text-gray-400">
            <h2 className={BlogStyle.next}>Read next post</h2>
            <div className="mt-8">
              <Link href="ile-ife-school-tour-1">
                <a>
                  <div>
                    <h2 className={BlogStyle.blogtitle}>
                      School Tour at Seventh Day Adventist School
                    </h2>
                  </div>
                  <div className="flex justify-center ">
                    <img
                      src="/images/IleIfeSchoolTour1/ifetour1a.jpeg"
                      className={BlogStyle.img}
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="mt-10">
              <Link href="The-Gum-on-the-Rock">
                <a>
                  <div>
                    <h2 className={BlogStyle.blogtitle}>The Gum on the Rock</h2>
                  </div>
                  <div className="flex justify-center ">
                    <img src="/images/gum.jpg" className={BlogStyle.img} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="bmain  text-gray-200">
          <div className=" px-4 mobile:px-8 lg:px-14 flex   h-40 pt-10 items-center divuppost">
            <div className="">
              <img
                src="/images/bloglogo.jpg"
                alt="writer"
                className=" w-24 tablet:w-32 rounded-full"
              />
            </div>
            <div className=" text-gray-500  ml-2">
              <div className="mb-2">
                <p className="ml-2 inuse">SMA Impact Network</p>
              </div>
              <div className="">
                <p className="ml-2 inuse">Published April 2021</p>
              </div>
            </div>
          </div>
          <h6 className="px-4 mobile:px-8 lg:pl-14">SCHOOL TOUR</h6>
          <div className="pt-4">
            <div>
              <div className="flex justify-center">
                <img
                  src="/images/IleIfeSchoolTour2/ifetour2c.jpeg"
                  className={BlogStyle.picture}
                  id="picture"
                />
              </div>
              <h3 className="mb-4 bheading  text-center">
                School Tour at Oluorogbo High School, Ile Ife, Osun State
              </h3>
            </div>
            <div className="btext text-sm mobile:text-base px-4 mobile:px-8 lg:px-14 my-4 ">
              <p>
                Precious Oyegunle started the program by introducing what the
                organization is all about. The aim of our coming was also
                clearly stated, after which she introduced Babalola Jesutosin to
                carry on with the agenda for the day. Intentionality of growth,
                as it has been the major stretch of discussion to ensure that
                students are aware of the need for a deliberate effort towards
                personal development and impact, if truly they want to input
                their quota for a positive change wherever they find themselves
                in the world.
              </p>
              <p className="mt-2">
                Jesutosin talked about the Intentionality of Growth and gave
                nuggets on some of the processes involved in growing. Some of
                these processes include that the individual must first be
                dissatisfied about the current stage of growth, stressing that
                there has to be a knowing that one's current stage needs to be
                improved. Hence, a desire for change, which is the next thing
                that must occur, one needs to be able to envision and desire and
                a better level of growth. This process involves writing the
                desired visions down and making plans of the possible ways of
                achieving such heights. Lastly, there has to be a decision to
                take action on the written plans by seeking advice from the
                appropriate and well-experienced personnel, getting a mentor for
                accountability and surrounding oneself with friends that are
                thrilled about one's progress. She further elongated that taking
                actions for growth must constantly involve the term (PPR) which
                is Preparation, Practice and Reflection on whatever area has
                been identified to be developed on.
              </p>
              <p className="mt-4">
                Afterwards, there was a brief interactive session by Oladapo
                Olatubosun to test the students retaining ability based on the
                information that has been passed across to them. It was indeed
                an amazing session with the students and teachers of Oluorogbo
                High School. We also had lovely time taking pictures, see them{" "}
                <a
                  href="/entertainment/gallery/Ife-March-School-Tour"
                  class="gallerylink"
                >
                  here
                </a>
              </p>
            </div>
          </div>
          <div className="  text-gray-400  pb-10 pt-8 divdownpost">
            <h2 className={BlogStyle.next}>Read next post</h2>
            <div className="flex justify-around downpost mt-4  pt-10">
              <div>
                <Link href="ile-ife-school-tour-1">
                  <a>
                    <div className="flex justify-center ">
                      <img
                        src="/images/IleIfeSchoolTour1/ifetour1a.jpeg"
                        className={BlogStyle.img2}
                      />
                    </div>
                    <div>
                      <h2 className={BlogStyle.blogtitle}>
                        School Tour at Seventh Day Adventist School
                      </h2>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="blog2">
                <Link href="Tangible-impact-and-relevance">
                  <a>
                    <div className="flex justify-center ">
                      <img
                        src="/images/skills.jpg"
                        className={BlogStyle.img2}
                      />
                    </div>
                    <div>
                      <h2 className={BlogStyle.blogtitle}>
                        Tangible Impact And Relevance
                      </h2>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
      <style jsx>{`
        #picture {
          width: 566px;
          height: 424px;
        }
        @media screen and (max-width: 600px) {
          #picture {
            width: 400px;
            height: 250px;
          }
        }
        @media screen and (max-width: 450px) {
          #picture {
            width: 300px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
