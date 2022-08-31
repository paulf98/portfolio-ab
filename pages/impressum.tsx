import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Alexander Beuerle | Impressum</title>
        <meta name="description" content="Portfolio von Alexander Beuerle." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="max-w-5xl	container-lg mx-auto my-8 px-8">
        <h1 className="text-3xl font-bold">Impressum</h1>
        <h2 className="text-2xl font-bold py-4">
          Angaben gem&auml;&szlig; &sect; 5 TMG
        </h2>
        <p>
          Alexander Beuerle
          <br />
          Langenbergstra&szlig;e 12
          <br />
          66954 Pirmasens
        </p>

        <h2 className="text-2xl font-bold py-4">Kontakt</h2>
        <p>
          Telefon: 0151-40375956
          <br />
          E-Mail: alexander.beuerle@web.de
        </p>

        <p>
          Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
        </p>
      </div>
      <Footer />
    </>
  );
}
