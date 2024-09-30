import MovieCard from "./MovieCard";
import movieListData from "../data/movieListData.json";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const data = movieListData.results;

function Main() {
  return (
    <DivStyle>
      {console.log(data)}
      {data.map((el) => (
        <LiStyle key={el.id}>
          <Link to={`/details/${el.id}`}>
            <MovieCard movie={el}></MovieCard>
          </Link>
        </LiStyle>
      ))}
    </DivStyle>
  );
}

const LiStyle = styled.li`
  list-style: none;
  width: 200px;
  padding: 10px 5px;
`;
const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Main;
