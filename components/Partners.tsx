import Image from "next/image";
import React from "react";
import DFB from "../public/images/logos/DFB.jpg";
import HSKoblenz from "../public/images/logos/HS_Koblenz.jpg";
import Porac from "../public/images/logos/index.png";
import HSHeidelberg from "../public/images/logos/SRH_Hochschule_Heidelberg.png";
import Macromedia from "../public/images/logos/MacromediaHochschule.png";
import Nada from "../public/images/logos/NADA.jpg";
import Landessportbund from "../public/images/logos/landessportbund.jpg";
import SportbundRheinhessen from "../public/images/logos/SportbundRheinhessen.jpg";
import LogoIST from "../public/images/logos/IST 2.svg";
import FCK from "../public/images/logos/FCK.png";
import SportbundPfalz from "../public/images/logos/SportbundPfalz.jpg";
import SWFV from "../public/images/logos/SWFV.png";
import DOSB from "../public/images/logos/DOSBAkademie.jpg";
import HSManagement from "../public/images/logos/hs-management.jpg";
import HTWSaar from "../public/images/logos/htwsaar2.png";

export default function Partners() {

  const logos = [{
    img: DFB,
    alt: "Logo Deutscher Fußball Bund",
  },
  {
    img: DOSB,
    alt: "Logo DOSB",
  },
  {
    img: SportbundPfalz,
    alt: "Logo Sportbund Pfalz",
  },
  {
    img: Landessportbund,
    alt: "Logo Landessportbund ",
  },
  {
    img: SportbundRheinhessen,
    alt: "Logo Sportbund Rheinhessen",
  },
  {
    img: Porac,
    alt: "Logo poRAC e.V.",
  },
  {
    img: Nada,
    alt: "Logo NADA",
  },
  {
    img: FCK,
    alt: "Logo 1. FC Kaiserslautern",
  },
  {
    img: SWFV,
    alt: "Logo SWFV",
  },
  {
    img: Macromedia,
    alt: "Logo Macromedia",
  },
  {
    img: LogoIST,
    alt: "Logo IST",
  },
  {
    img: HSHeidelberg,
    alt: "Logo Hochschule Heidelberg",
  },
  {
    img: HSManagement,
    alt: "Logo HS Management",
  },
  {
    img: HSKoblenz,
    alt: "Logo Hochschule Koblenz",
  },
  {
    img: HTWSaar,
    alt: "Logo HTW Saar",
  },

]


  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-8">
        Referenzen & Netzwerk
      </h1>
      <div className="container w-full max-w-5xl mx-auto	grid grid-cols-3 md:grid-cols-5 content-center gap-8 md:gap-16 py-8 md:py-16 px-8 md:px-12 justify-around">
        {
          logos.map((logo, i) => {
            return (
              <Image
                key={i}
                src={logo.img}
                alt={logo.alt}
                objectFit="contain"
                layout="responsive"
              />
            )
          })
        }
      </div>
    </div>
  );
}
