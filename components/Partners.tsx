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

export default function Partners() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-8">
        Referenzen & Netzwerk
      </h1>
      <div className="w-full max-w-full	grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 content-center gap-y-8 md:gap-y-16 gap-x-20 py-8 md:py-16 px-8 md:px-12 justify-around">
        <Image
          className="smx-auto"
          src={DFB}
          alt="Logo Deutscher Fußball Bund"
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="mx-auto"
          src={HSKoblenz}
          alt="Logo Hochschule Koblenz"
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-20 mx-auto"
          src={Porac}
          alt="Logo poRAC e.V."
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-20 mx-auto"
          src={HSHeidelberg}
          alt="Logo Hochschule Heidelberg"
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-20 mx-auto"
          src={Macromedia}
          alt="Logo Macromedia"
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-20 mx-auto"
          src={Nada}
          alt="Logo NADA"
          objectFit="contain"
          layout="responsive"
        />{" "}
        <Image
          className="h-20 mx-auto"
          alt="Logo Landessportbund "
          src={Landessportbund}
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-20 mx-auto"
          src={SportbundRheinhessen}
          alt="Logo Sportbund Rheinhessen"
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-20 mx-auto"
          src={LogoIST}
          alt="Logo IST"
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-16 mx-auto"
          src={FCK}
          alt="Logo 1. FC Kaiserslautern"
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-20 mx-auto"
          src={SportbundPfalz}
          alt="Logo Sportbund Pfalz"
          objectFit="contain"
          layout="responsive"
        />
        <Image
          className="h-20 mx-auto"
          src={SWFV}
          alt="Logo SWFV"
          objectFit="contain"
          layout="responsive"
        />
      </div>
    </div>
  );
}
