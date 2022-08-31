import type { NextPage } from "next";
import Head from "next/head";
import Eventmanagement from "../components/Eventmanagement";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Profile from "../components/Profile";
import Sustainability from "../components/Sustainability";
import Vereinsmanagement from "../components/Vereinsmanagement";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alexander Beuerle | Portfolio</title>
        <meta name="description" content="Portfolio von Alexander Beuerle." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Vereinsmanagement />
        <Profile />
        <Partners />
        <Eventmanagement />
        <Sustainability />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
