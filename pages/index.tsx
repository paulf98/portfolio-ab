import type { NextPage } from "next";
import Head from "next/head";
import Eventmanagement from "../components/Eventmanagement";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Profile from "../components/Profile";
import Sustainability from "../components/Sustainability";
import Vereinsmanagement from "../components/Vereinsmanagement";
import SocialPreview from "../public/images/SocialPreview.jpg";

const PAGE_TITLE = "Alexander Beuerle | Sportmanagement";
const PAGE_DESCRIPTION =
  "Alexander Beuerle ist als Dozent im Bereich Sportmanagement tätig und steht für zielgruppenspezifische und anwendungsorientierte Lehre.";

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
        <meta property="og:image" content={SocialPreview.src} />
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
