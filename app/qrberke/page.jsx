"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiGithubFill, RiLinkedinFill, RiTwitterXLine } from "react-icons/ri";
import { PiCodeBold } from "react-icons/pi";
import qrberke from "../../public/qrberke.png";

const page = () => {
  return (
    <div className="text-center text-gray-900">
      <div className="justify-center text-center flex mt-2">
        <h1 className="text-gray-900 font-bold text-4xl">Berke Güleryüz</h1>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl text-gray-900 mt-5 font-sans font-semibold">
          Founder || Developer
        </h2>
        <span className="text-gray-900">+90 554 678 97 80</span>
      </div>
      <Link href={"mailto:berke@clodron.com"}>
        <span>berke@clodron.com</span>
      </Link>
      <div className="font-semibold justify-center flex text-center items-center self-center">
        <Image
          src={qrberke}
          alt="qrberke"
          width={300}
          height={300}
          className="justify-center flex text-center items-center self-center"
        />
      </div>
      <div className="justify-center gap-3 font-bold flex mt-12 text-2xl text-gray-900">
        <Link href="https://twitter.com/Omegayon" target="_blank">
          <RiTwitterXLine />
        </Link>
        <Link
          href="https://www.linkedin.com/in/berke-guleryuz/"
          target="_blank">
          <RiLinkedinFill />
        </Link>
        <Link href="https://clodron.com/" target="_blank">
          <PiCodeBold />
        </Link>
        <Link href="https://github.com/berkeguleryuz" target="_blank">
          <RiGithubFill />
        </Link>
      </div>
    </div>
  );
};

export default page;
