import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/images/AB_Wortbildmarke_ohneClaim_weiss_schwarz.png";

export default function Footer() {
  return (
    <footer className="p-4 bg-black text-white grid md:grid-cols-3 py-12">
      <div className="relative h-32 flex justify-center md:justify-end md:mr-8 items-center py-4 px-32">
        <Image
          src={Logo}
          alt="Logo Alexander Beuerle"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col py-4 text-center md:text-left">
        <h3 className="font-bold text-2xl mb-2" id="kontakt">
          Alexander Beuerle
        </h3>
        <Link href="/impressum" className="hover:underline">
          Impressum
        </Link>
        <Link href="/datenschutz" className="hover:underline">
          Datenschutz
        </Link>
      </div>
      <div className="flex flex-col py-4 text-center md:text-left">
        <h3 className="font-bold text-2xl mb-2">Kontakt</h3>
        <a href="mailto:alexander.beuerle@web.de">alexander.beuerle@web.de</a>
        <a href="tel:+4915140375956">+49 151 40 3759 56</a>
      </div>
    </footer>
  );
}
