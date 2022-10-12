import React, { useEffect, useState } from "react";
import Loadings from "../../common/Loading/Loadings";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import { basUrl } from "../../config/Config";
import MovieCard from "../MovieCard/MovieCard";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(basUrl)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setMovies(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);
  console.log(movies);
  return (
    <>
      <div className="bg-blackGray">
        <div className="container mx-auto py-24 ">
          {error && <div>{error}</div>}
          {isPending && (
            <div>
              <Loadings />
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 gap-4">
            {/* section title */}
            <div className="col-span-2  md:col-span-4 lg:col-span-2 flex justify-center items-center ">
              <SectionTitle
                title="Popular Movies to Watch Now"
                description="Most watched movies by days"
              />
            </div>
            {/* all movies card */}
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie?.score} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMovies;
