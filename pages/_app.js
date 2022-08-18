import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // pageProps : 서버사이드props에서 던진 props를 받는다
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
