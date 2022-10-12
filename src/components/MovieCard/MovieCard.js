import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  const id = movie?.show?.id 
  console.log(movie);
  return (
    <>
      <div className=" pb-4 ">
        <img
          className=" w-52 max-h-56 h-56"
          src={movie?.show?.image?.original}
          alt=""
        />

        <div className="pt-4">
          <h6 className="mb-3 font-normal flex text-white text-sm">
            {movie?.show?.name}
          </h6>
          <div className="flex text-pgColor text-sm -mt-2">
            <p>{movie?.show?.premiered?.slice(0, 4)}</p>
            {movie?.show?.premiered ? "," : null}
            <p className="pl-1">{movie?.show?.language}</p>
          </div>
          <button
            onClick={() => navigate(`movie/${id}`)}
            className=" text-sm  bg-bgMain hover:opacity-90 transition-opacity duration-300  text-white py-2 px-4 rounded-sm mt-2 "
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
