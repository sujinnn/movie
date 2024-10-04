import { useEffect, useState } from "react";
import movieDetailData from "../data/movieDetailData.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function MovieDetail() {
  const params = useParams();
  const [movieData, setmovieDetailData] = useState([]);
  const movieId = Number(params.id);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDVjMWFiYTg0NjAzZGY0YjA0MTQ4NDJlMDdkMTRmMiIsIm5iZiI6MTcyNzk3NjI5Ni42MDcwMzYsInN1YiI6IjY2ZmNmOTRmZGYyYWJhOTViM2YyMzg4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PEogprpwkWjGzwET2SBf4pqY62VvqUvqEgD709nGk4",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setmovieDetailData(response);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(movieData.genres);

  return (
    <DetailStyle>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}
        `}
        className="w-[400px] h-[500px]"
      ></img>
      <Detail2>
        <div className="text-[30px] font-bold  w-[180px] leading-[25px]">
          {movieData.title}
        </div>
        <div className="text-[darkgray] w-[180px] ">
          평점 {movieData.vote_average}
        </div>
        <div>
          {movieData.genres
            ? movieData.genres.map((el) => el.name).join("  ")
            : "장르 정보 없음"}
        </div>
        <div className="pt-[50px]">{movieData.overview}</div>
      </Detail2>
    </DetailStyle>
  );
}

const DetailStyle = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const Detail2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  width: 400px;
`;

export default MovieDetail;
