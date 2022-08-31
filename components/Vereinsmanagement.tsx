import React from "react";
import {
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaShieldAlt,
} from "react-icons/fa";
import Quote from "./Quote";
import PierreAnton from "../public/images/SB_Pfalz_Pierre_Anthonj.webp";
import TobiasChrist from "../public/images/DFB_Tobias_Christ.jpg";
import ABTartan from "../public/images/AB-tartanbahn.jpg";
import Image from "next/image";

export default function Vereinsmanagement() {
  return (
    <div className="bg-stone-50 flex flex-col justify-center items-center px-4 md:px-16 py-8 md:py-16">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-8">
        Vereins- und Verbandsmanagement
      </h1>
      <p className="text-center max-w-5xl mb-24 md:mb-12">
        Fundiertes Vereins und Verbandsmanagement ist die Basis für nachhaltigen
        Erfolg. Aufgrund meiner Erfahrungen sowie Tätigkeiten in haupt- und
        ehrenamtlichen Führungspositionen im organisierten Sport vermittle ich
        praxisnah, worauf es in der Führung von Non-Profit-Organisationen
        ankommt und welche Mehrwerte dabei insbesondere interdisziplinäre
        Netzwerke generieren.
      </p>

      <div className="grid lg:grid-cols-3 items-start md:gap-16 gap-y-8 px-4 md:p-16">
        <Quote
          text="Wir sind sehr froh, dass uns Alex mit seiner umfassenden Erfahrung im Vereins- und Verbandsmanagement als Vereinsberater unterstützt und somit einen wesentlichen Beitrag zur Vereinsentwicklung leistet."
          img={PierreAnton}
          person="Pierre Anthonj"
          position="Sportbund Pfalz"
        />

        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 mt-12 lg:mt-20 mb-12 md:mb-0"
          style={{ maxWidth: "500px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="relative overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <Image
                src={ABTartan}
                alt="Alexander Beuerle mit einer Tartanbahn im Hintergrund"
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>
          </div>
          <h1 className="text-xl text-center font-bold mb-8">
            Lizenzen & Zertifikate
          </h1>
          <div className="flex items-center mb-2">
            <FaCalendarCheck className="shrink-0 mr-4" size={"2em"} />{" "}
            <p>Master of Arts Sportmanagement </p>
          </div>
          <div className="flex items-center mb-2">
            <FaShieldAlt className="shrink-0 mr-4" size={"2em"} />{" "}
            <p>Zertifizierter Verbandsmanager</p>
          </div>
          <div className="flex items-center mb-2">
            <FaChalkboardTeacher className="shrink-0 mr-4" size={"2em"} />{" "}
            <p>Lizenzierter Vereinsmanager B</p>
          </div>
        </div>
        <Quote
          text="Alex kennt sowohl die haupt-, als auch
          die ehrenamtliche Perspektive von Sportorganisationen. Durch diesen Mehrwert
          ist es ihm möglich, beide Seiten zu betrachten und somit einen umfassenden
          Einblick zu geben. "
          img={TobiasChrist}
          person="Tobias Christ"
          position="Deutscher Fußball Bund"
        />
      </div>
    </div>
  );
}
