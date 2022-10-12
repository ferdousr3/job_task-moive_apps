import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" bg-hero-main bg-center bg-no-repeat bg-cover py-24 md:py-40 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="text-center">
              <h1 className=" text-4xl sm:text-6xl text-white font-bold ">
                American <br /> Made
              </h1>
              <h6 className="text-base text-white mt-4 font-light">
                <span>2020</span> | Action | <span>1hr 50min</span>
              </h6>
              <div className="mt-6">
                <button className="uppercase bg-bgMain hover:opacity-90 transition-opacity duration-300 text-base text-white py-4 px-8 rounded-sm m-2 font-semibold">
                  Watch Now
                </button>
                <button className="uppercase bg-transparent border border-white hover:opacity-90 transition-opacity duration-300 text-base text-white py-4 px-8 m-2 rounded-sm font-semibold">
                  + Play list
                </button>
              </div>
            </div>
            <div className="div"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
