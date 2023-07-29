import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Brand from "../components/brand";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BrandIt, Idea Starts Here!</title>
        <meta
          name="description"
          content="Generate branding snippets for your product."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Brand />
    </div>
  );
};

export default Home;
