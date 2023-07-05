import React from "react";
import Link from "next/link";

import { SiLinkedin, SiInstagram, SiTelegram } from 'react-icons/si';

const SocialMedia = () => {
  return(
    <section className="pb-10">
      <div className="w-[80%] mx-auto flex items-center justify-center">
        <Link href="https://www.linkedin.com/in/olga-krzysztofik/">
          <SiLinkedin size={50} className="text-[#d66382]" />
        </Link>
        <Link href="https://instagram.com/pinkjagnie" className="pl-6 md:pl-12">
          <SiInstagram size={50} className="text-[#d66382]" />
        </Link>
        <Link href="https://t.me/PinkJagnie" className="pl-6 md:pl-12">
          <SiTelegram size={50} className="text-[#d66382]" />
        </Link>
      </div>
    </section>
  )
};

export default SocialMedia;