import React from "react";
import Link from "next/link";

import { contentLinks } from "../constans/index";

const SingleLink = () => {
  return(
    <div>
      {contentLinks.map((item, id) => {
        return(
          <div key={item.id} className="w-[95%] mx-auto border-4 border-[#d66382] rounded-full bg-zinc-100 text-[#d66382] cursor-pointer hover:bg-[#d66382] hover:text-zinc-100 mb-8">
            <Link href={item.link} className="flex items-center justify-center text-center py-4 px-8">
              <p className="text-[20px]">{item.icon}</p>
              <p className="pl-4 font-semibold">{item.title}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
};

export default SingleLink;