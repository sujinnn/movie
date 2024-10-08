import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

function Main() {
  const [PopularData, setPopularData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.BEARER}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPopularData(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <DivStyle>
      {PopularData.map((el) => (
        <LiStyle key={el.id}>
          <Link to={`/details/${el.id}`}>
            <MovieCard movie={el}></MovieCard>
          </Link>
        </LiStyle>
      ))}
    </DivStyle>
  );
}

export const LiStyle = styled.li`
  list-style: none;
  width: 200px;
  padding: 10px 5px;
`;
export const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 100px;
`;

export default Main;
