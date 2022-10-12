import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <>
      <div>
        <hr className=" w-10 text-center border-borderColor pb-6 " />
        <h1 className="text-4xl font-semibold text-white md:max-w-[70%]">{title}</h1>
        <p className="text-sm font-normal text-pgColor mt-4">{description}</p>
        <hr className=" max-w-[60%]  text-center border-borderColor mt-6 " />
      </div>
    </>
  );
};

export default SectionTitle;
