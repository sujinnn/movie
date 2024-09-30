import movieDetailData from "../data/movieDetailData.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function MovieDetail() {
  //   const params = useParams();
  //   const movieData = movieDetailData.find((el) => el.id === Number(params.id));

  return (
    <DetailStyle>
      {/* {console.log(movieDetailData)} */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetailData.backdrop_path}
        `}
        className="w-[480px] h-[500px]"
      ></img>
      <Detail2>
        <div className="text-[30px] font-bold  w-[180px] leading-[25px]">
          {movieDetailData.title}
        </div>
        <div className="text-[darkgray] w-[180px] ">
          평점 {movieDetailData.vote_average}
        </div>
        {movieDetailData.genres.map((el) => (
          <li className="list-none pt-[10px]" key={el.id}>
            {el.name}&nbsp;&nbsp;{" "}
          </li>
        ))}
        <div className="pt-[50px]">{movieDetailData.overview}</div>
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
