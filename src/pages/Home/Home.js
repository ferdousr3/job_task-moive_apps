import React from "react";
import PageTitle from "../../common/PageTitle/PageTitle";
import AllMovies from "../../components/AllMovies/AllMovies";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="Home" />
      <section>
        <Hero />
      </section>
      <section>
        <AllMovies />
      </section>
    </>
  );
};

export default Home;
