import React from "react";
import Quote from "./Quote";
import { FaChalkboardTeacher, FaWheelchair, FaRunning } from "react-icons/fa";
import LaraBelke from "../public/images/NADA_Lara_Belke.jpg";
import PatrickMaas from "../public/images/FCK_Patrik_Maaß.jpg";
import Nachhaltigkeit from "../public/images/nachhaltigkeit.jpg";
import Image from "next/image";

export default function Sustainability() {
  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-2 mb-16">
        <div className="flex flex-col justify-center px-8 lg:px-16 pt-8 lg:pt-16">
          <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-bold mb-4 lg:mb-8">
            Nachhaltigkeit und
            <br />
            gesellschaftliche Verantwortung
          </h1>
          <p className="text-justify">
            Sport verbindet Menschen und nirgendwo lassen sich Berührungsängste
            schneller ab- und Kontakte aufbauen. Damit einhergehend ist aber
            auch eine Pflicht zur gesellschaftlichen Verantwortung und
            nachhaltigem Handeln. Diesen Themen verschreibe ich mich sehr stark,
            insbesondere durch das Verfassen der ersten wissenschaftlichen
            Forschung zur Nachhaltigkeit im Amateurfußball, welche als Grundlage
            für weitere Forschungen zur Nachhaltigkeit im Breitensport dient.
            Damit eng verknüpft sind meine Engagements in der Bildung für einen
            nachhaltigen Spitzensport.
          </p>
          <h3 className="text-xl font-bold lg:mt-16 mt-8 mb-4  text-center lg:text-left">
            Lizenzen & Zertifikate
          </h3>
          <div>
            <div className="flex items-center mb-2">
              <FaRunning
                className="shrink-0 mr-4"
                size={"2em"}
                color="#0F70B7"
              />{" "}
              <p>Diplom Athletenmanager</p>
            </div>
            <div className="flex items-center mb-2">
              <FaWheelchair
                className="shrink-0 mr-4"
                size={"2em"}
                color="#0F70B7"
              />{" "}
              <p>
                Prüfer Deutsches Sportabzeichen für Menschen mit Behinderung
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaChalkboardTeacher
                className="shrink-0 mr-4"
                size={"2em"}
                color="#0F70B7"
              />{" "}
              <p>Zertifizierter Ausbilder von Referenten</p>
            </div>
          </div>
        </div>
        <div className="relative h-72 md:h-full order-first lg:order-last flex justify-center items-center">
          <Image src={Nachhaltigkeit} alt="Nachhaltigkeit" layout="fill" objectFit="cover" placeholder="blur" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-16 gap-y-16 p-8 lg:p-16">
        <Quote
          text="Als freier Mitarbeiter der NADA für Dopingprävention setzt sich Alex für einen sauberen Sport durch Information und nachhaltige Aufklärung ein."
          img={LaraBelke}
          person="Dr. Lara Belke"
          position="Nationale Anti Doping Agentur Deutschland"
        />
        <Quote
          text="Alex engagiert sich sehr stark für die duale Karriere von Nachwuchsathlet*innen und weiß, wie wichtig vor allem auch die schulische Ausbildung ist. Die Begegnung auf Augenhöhe zeichnet ihn dabei besonders aus."
          img={PatrickMaas}
          person="Patrik Maaß"
          position="1. FC Kaiserslautern"
        />
      </div>
    </div>
  );
}
