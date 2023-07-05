import React from "react";

import SingleLink from "./SingleLink";

const ListOfLinks = () => {
  return(
    <section className="py-6 w-[90%] min-[600px]:w-[70%] md:w-[60%] lg:w-[50%] mx-auto flex flex-col justify-center items-center">
      <SingleLink />
    </section>
  )
};

export default ListOfLinks;