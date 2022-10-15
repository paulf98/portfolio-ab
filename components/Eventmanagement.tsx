import React from "react";
import Quote from "./Quote";
import {
  FaChalkboardTeacher,
  FaShieldAlt,
  FaCalendarCheck,
} from "react-icons/fa";
import StefanFeininger from "../public/images/StefanFeininger.jpg";
import PetraSaretz from "../public/images/Heidenheim_Petra_Saretz.jpg";

export default function Eventmanagement() {
  return (
    <div className="bg-stone-50 py-8 lg:py-16">
      <div className="grid lg:grid-cols-2 lg:gap-16 p-8 lg:p-16">
        <div>
          <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-bold mb-8">
            Eventmanagement und
            <br />
            Veranstaltungsleitung
          </h1>
          <p className="text-justify">
            Sportveranstaltungen begleiten mich seit meinen ersten beruflichen
            Schritten. In zunehmend wachsender Verantwortung konnte ich dabei
            u.a. bei der Ausrichtung von mehreren A-Länderspielen der deutschen
            Fußball Nationalmannschaft tätig sein. Als Veranstaltungsleiter und
            Sicherheitsbeauftragter von Sportevents mit bis zu 50.000 Zuschauern
            verschreibe ich mich insbesondere dem reibungslosen und sicheren
            Ablauf einer Veranstaltung für alle Stakeholder. Dies lasse ich in
            meine Dozententätigkeit mit realen Beispielen einfließen.
          </p>
        </div>

        <div className="container flex flex-col justify-center px-4 lg:px-16 py-8">
          <h3 className="text-xl font-bold mt-8 lg:mt-16 mb-4 text-center lg:text-left">
            Lizenzen & Zertifikate
          </h3>
          <div>
            <div className="flex items-center mb-2">
              <FaCalendarCheck
                className="shrink-0 mr-4"
                color="#0F70B7"
                size={"2em"}
              />{" "}
              <p>Zertifizierter Veranstaltungsleiter</p>
            </div>
            <div className="flex items-center mb-2">
              <FaShieldAlt
                className="shrink-0 mr-4"
                size={"2em"}
                color="#0F70B7"
              />{" "}
              <p>Zertifizierter Sicherheitsmanager</p>
            </div>
            <div className="flex items-center mb-2">
              <FaChalkboardTeacher
                className="shrink-0 mr-4"
                size={"2em"}
                color="#0F70B7"
              />{" "}
              <p>
                Zertifizierte Lehrkraft zur Beschulung von Ordnungsdienstkräften{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-16 gap-y-16 px-8 lg:px-16">
        <Quote
          text="Aufgrund seiner umfassenden Erfahrungen im Eventmanagement weiß Alex wie wichtig das Branding bei Veranstaltungen ist und worauf es bei der Schaffung von authentischen Markenerlebnissen mit nachhaltiger Wirkung ankommt."
          img={StefanFeininger}
          person="Stefan Feininger"
          position="SV Sandhausen"
        />
        <Quote
          text="Alex verfügt nicht nur über fundierte theoretische Kenntnisse bei der sicheren Planung von Sportevents, sondern vor allem auch über wertvolles praxisnahes Wissen."
          img={PetraSaretz}
          person="Petra Saretz"
          position="1. FC Heidenheim 1846"
        />
      </div>
    </div>
  );
}
