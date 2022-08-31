import type { NextPage } from "next";
import Head from "next/head";
import Eventmanagement from "../components/Eventmanagement";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Profile from "../components/Profile";
import Sustainability from "../components/Sustainability";
import Vereinsmanagement from "../components/Vereinsmanagement";

const PAGE_TITLE = "Alexander Beuerle | Portfolio";
const PAGE_DESCRIPTION = "Portfolio von Alexander Beuerle.";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={PAGE_TITLE} key="ogtitle" />
        <meta
          property="og:description"
          content={PAGE_DESCRIPTION}
          key="ogdesc"
        />
        <meta property="og:image" content={"./images/LogoClaim.png"} />
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
