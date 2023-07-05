import React from "react";

const Hero = () => {
  return(
    <section className="pt-14 min-[600px]:pt-20 md:pt-28 lg:pt-14 xl:pt-20">
      <div className="bgHeroImage rounded-full w-[200px] h-[200px] mt-8 mx-auto min-[600px]:w-[300px] min-[600px]:h-[300px]"></div>
      <h1 className="text-center text-xl font-bold text-slate-700 pt-4">@pinkjagnie</h1>
      <p className="pt-2 text-center text-xs text-slate-700">bez filtra • tech • lifestyle • career</p>
    </section>
  )
};

export default Hero;