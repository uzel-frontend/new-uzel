import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import {
  Facebook,
  FacebookIcon,
  Linkedin,
  LinkedinIcon,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#101828] flex justify-between items-center py-10">
      <div className="flex items-center gap-3 max-w-[1352px] mx-auto justify-between w-full">
        <Link href="/" className="flex items-center gap-3 text-neutral-900">
          <Image
            src={logo.src}
            alt="logo"
            width={100}
            height={100}
            className="w-full h-8"
          />
        </Link>

        <div className="flex items-center gap-3">
          <Twitter size={20} />
          <Linkedin size={20} />
          <Facebook size={20} />
        </div>

        <div className="flex items-center gap-3 text-base font-normal">
          © 2077 Uzel. All rights reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
