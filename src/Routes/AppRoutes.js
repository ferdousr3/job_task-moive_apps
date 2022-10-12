import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import Error from "../pages/404/Error";
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";

const AppRoutes = () => {
  return (
    <>
      {/* navbar */}
      <header>
        <Header />
      </header>
      {/* main body */}
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AppRoutes;
