import "../styles/index.css";
import "../styles/global.css";
import "../styles/blogGlobal.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
