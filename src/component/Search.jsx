import { Link, useSearchParams } from "react-router-dom";
import { getRegExp } from "korean-regexp";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { DivStyle, LiStyle } from "./Main";
import useDebounce from "../useDebounce";

function Search() {
  const [PopularData, setPopularData] = useState([]);

  const [searchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState(PopularData);
  const param = searchParams.get("title");
  const reg = getRegExp(param);

  const debouncedValue = useDebounce(param, 1000);
  const search = useCallback(async () => {
    const newFilteredData = PopularData.filter((el) => el.title.match(reg));
    setFilteredData(newFilteredData);
  }, [debouncedValue]);
  useEffect(() => {
    search();
  }, [debouncedValue, search]);

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
      {filteredData.map((el) => (
        <LiStyle key={el.id}>
          <Link to={`/details/${el.id}`}>
            <MovieCard movie={el}></MovieCard>
          </Link>
        </LiStyle>
      ))}
    </DivStyle>
  );
}

export default Search;
