import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import TicketBook from "../../components/TicketBook/TicketBook";
import { singleUrl } from "../../config/Config";

const Movie = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [movies, setMovies] = useState({});

  const url = `${singleUrl}${id}`;

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setMovies(data);
        });
    }, 1000);
  }, [url]);

  return (
    <>
      {/* PageTitle */}
      <Helmet>
        <title>{movies?.name ? movies?.name : "movie"}- Movie</title>
      </Helmet>
      {/* movies */}

      <div className="container mx-auto pt-24 pb-24  ">
        <div className="grid grid-cols-1 p-4 md:grid-cols-2 items-center bg-white rounded-lg  md:flex-row max-w-4xl mx-auto  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 z-0">
          <div className="max-w-xs">
            <button
              className="pb-4 text-blue-700"
              onClick={() => navigate("/")}
            >
              Back to home
            </button>
            <img
              className=""
              src={movies?.image?.original}
              alt={movies?.name}
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movies?.name}
            </h4>
            <div className="flex text-pgColor text-sm pb-4">
              <p>{movies?.premiered}</p>
              {movies?.premiered ? "," : null}
              <p className="pl-1">{movies?.language}</p>
            </div>
            <div className="flex pb-2 -mt-2">
              {movies?.genres?.map((item) => (
                <p key={item} className="pl-1">
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movies?.summary}
            </span>
            <button
              onClick={() => setOpenModal(true)}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book Ticket
            </button>
          </div>
        </div>
        {/* Ticket modal */}
        <TicketBook
          movies={movies}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </>
  );
};

export default Movie;
