import Image, { StaticImageData } from "next/image";
import React from "react";

type QuoteProps = {
  text: string;
  img: StaticImageData;
  imgAlt?: string;
  person?: string;
  position?: string;
};

export default function Quote(props: QuoteProps) {
  return (
    <div
      className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
      style={{ maxWidth: "500px" }}
    >
      <div className="w-full pt-1 pb-5">
        <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
          <Image src={props.img} alt={props.imgAlt || ""} placeholder="blur" />
        </div>
      </div>
      <div className="w-full mb-10">
        <div className="text-3xl text-zinc-900 text-left leading-tight h-3">
          “
        </div>
        <p className="text-sm text-gray-700 text-center md:text-justify px-5">
          {props.text}
        </p>
        <div className="text-3xl text-zinc-900 text-right leading-tight h-3 -mt-3">
          ”
        </div>
      </div>
      <div className="w-full">
        <p className="text-md text-zinc-500 font-bold text-center">
          {props.person}
        </p>
        <p className="text-xs text-zinc-900 text-center">{props.position}</p>
      </div>
    </div>
  );
}
