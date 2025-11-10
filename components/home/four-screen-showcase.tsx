import React from "react";
import screen1 from "@/public/home/1.svg";
import screen2 from "@/public/home/2.svg";
import screen3 from "@/public/home/3.svg";
import screen4 from "@/public/home/4.svg";
import Image from "next/image";

type Props = {};

const FourScreenShowcase = (props: Props) => {
  return (
    <div className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="group relative mx-auto flex h-[560px] max-w-[360px] overflow-hidden rounded-[28px] bg-[#335CFF] sm:h-[640px] sm:max-w-[600px] sm:rounded-[32px] md:h-[882px] md:max-w-[1352px] md:rounded-[40px]">
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center md:px-0">
          <h2 className="mx-auto max-w-[320px] font-twklausanne font-medium text-3xl leading-tight text-white sm:max-w-[500px] sm:text-4xl sm:leading-[1.2] md:max-w-[782px] md:text-[55px] md:leading-[65px]">
            Empowering Global Citizens and Digital Innovators.
          </h2>
          <p className="mx-auto max-w-[320px] pt-4 text-sm text-white/80 sm:max-w-[480px] sm:text-base md:max-w-[520px] md:text-lg">
            Uzel is designed for individuals who demand flexibility,
            convenience, and control over their diverse financial needs. Whether
            you're a frequent traveler, an international business professional,
            Uzel provides the tools you need to thrive in an interconnected
            world.
          </p>
        </div>

        <div className="pointer-events-none absolute top-0 left-0">
          <Image
            src={screen1.src}
            alt="Four Screen Showcase"
            width={1000}
            height={1000}
            className="w-[130px] sm:w-[350px] h-full rounded-tl-[40px] -translate-6 group-hover:translate-0 transition-all ease-in-out duration-700"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src={screen2.src}
            alt="Four Screen Showcase 2"
            width={1000}
            height={1000}
            className="w-[130px] sm:w-[350px] h-full rounded-tr-[40px] translate-6 group-hover:translate-0 transition-all ease-in-out duration-700"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src={screen3.src}
            alt="Four Screen Showcase"
            width={1000}
            height={1000}
            className="w-[130px] sm:w-[350px] h-full rounded-bl-[40px] -translate-x-6 translate-y-6 group-hover:translate-0 transition-all ease-in-out duration-700"
          />
        </div>
        <div className="absolute top-0 right-0">
          <Image
            src={screen4.src}
            alt="Four Screen Showcase"
            width={1000}
            height={1000}
            className="w-[130px] sm:w-[350px] h-full rounded-br-[40px] translate-x-6 -translate-y-6 group-hover:translate-0 transition-all ease-in-out duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default FourScreenShowcase;
