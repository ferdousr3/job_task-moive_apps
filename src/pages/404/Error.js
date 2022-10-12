import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../common/PageTitle/PageTitle";

const Error = () => {
    const navigate = useNavigate();
  return (
    <>
      {/* page title */}
      <PageTitle title="404" />
      <div className="container mx-auto md:36 lg:py-40 max-w-3xl">
        <h1 className="text-2xl md:text-5xl font-semibold text-blackGray md:max-w-[70%]">
          404 <br /> page not Found
        </h1>
        <p className="text-sm font-normal text-pgColor mt-4">
          Please check the URL in the address bar and try again
        </p>
        <div className="ivd">
          <button className="pb-4 text-blue-700" onClick={() => navigate("/")}>
            Back to home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
