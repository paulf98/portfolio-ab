import Image from "next/image";
import React from "react";
import Logo from "../public/images/LogoClaim.png";
import ABStadion from "../public/images/AB-Stadion.jpg";
import "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className="md:h-screen">
      <div className="grid md:h-full md:grid-cols-2 gap-0">
        <div className="md:h-screen flex flex-col justify-center align-middle p-8 py-16 md:p-16">
          <div className="mx-4 lg:mx-0 lg:mr-32 mb-8">
            <Image src={Logo} alt="Alexander Beuerle Logo mit Claim"  />
          </div>
          <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold mb-8">
            Alexander Beuerle
          </h1>
          <p className="mb-8 text-justify md:text-left">
            Als Dozent für Sportmanagement stehe ich für zielgruppenspezifische
            und anwendungsorientierte Lehre mit dem Ziel, Begeisterung zu
            schaffen.
          </p>
          <a
            className="bg-black hover:bg-zinc-900 text-white text-center py-2 px-4 rounded md:max-w-xs"
            href="#kontakt"
          >
            Kontakt
          </a>
        </div>

        <div
          className="h-screen bg-cover bg-center md:bg-top bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage: `url(${ABStadion.src})`,
          }}
        ></div>
      </div>
    </div>
  );
}
