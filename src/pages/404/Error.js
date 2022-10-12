import React from "react";
import PageTitle from "../../common/PageTitle/PageTitle";

const Error = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="404" />
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-blackGray md:max-w-[70%]">
          404 page not Found
        </h1>
        <p className="text-sm font-normal text-pgColor mt-4">
          Please check the URL in the address bar and try again
        </p>
      </div>
    </>
  );
};

export default Error;
