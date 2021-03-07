import { Client } from "../../prismic.js";
import Prismic from "prismic-javascript";
import { RichText } from 'prismic-reactjs';

export default function BlogPost(props) {
  return (
   <div>
       hii
    {/* <RichText
            render={props.data.blog_title}
           
    /> */}
  </div>
  )
}

export async function getStaticProps(context) {
  const doc = await Client.getByUID("	blog_posts", context.params.slug);
  return {
    props: {
      data: doc.data,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // See the "fallback" section below
  };
}
