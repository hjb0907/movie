import React from "react";
import Movie from "../component/Movie";
import MainVisual from "../component/MainVisual";
import PopularTV from "../component/PopularTV";
import PopularMovie from "../component/PopularMovie";

const Main = ({ movieData, popularMovieData, popularTVData }) => {

  let filteredData = movieData?.results.filter(movie => movie.overview !== '') || [];
  let filterMovieData = popularMovieData?.results.filter(movie => movie.overview !== '') || [];
  let filterTVdData = popularTVData?.results.filter(tv => tv.overview !== '') || [];

  return (
    <div className="main">
      <div className="inner">
        <MainVisual filteredData={filteredData} />
        <h3 className="title">현재 상영중인 영화</h3>
        <Movie filteredData={filteredData} />
        <h3 className="title">인기있는 영화</h3>
        <PopularMovie filterMovieData={filterMovieData} />
        {popularTVData && (
          <>
            <h3 className="title">인기있는 TV 프로그램</h3>
            <PopularTV filterTVdData={filterTVdData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
