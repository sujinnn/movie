import styled from "styled-components";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="h-[250px] "
      />
      <div className="text-[20px] font-bold ">{movie.title}</div>
      <div className="text-right mr-[10px] text-[darkgray]">
        평점 : {movie.vote_average}
      </div>
    </>
  );
}

export default MovieCard;
