import React, { useState } from "react";

const PopularMovie = ({ filterMovieData }) => {
  console.log(filterMovieData)
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShowDesc = (id) => {
    setSelectedMovie(selectedMovie === id ? null : id);
  };
  
  return (
    <div className="movie">
        <div className="movie_wrap">
          {filterMovieData.map((item, index) => (
            <div
              className="pos_r popular_movie_item"
              key={index}
              id={item.id}
              onClick={() => handleShowDesc(item.id)}
            >
              <div
                className="img_area"
                style={{
                  background: `url(https://image.tmdb.org/t/p/original${item.poster_path}) center 0/contain no-repeat`,
                }}
              ></div>
              <h4>{item.title}</h4>
              {selectedMovie === item.id && (
                <div className="desc">
                  <p>{item.overview}</p>
                  <p>{item.release_date}</p>
                </div>
              )}

            </div>
          ))}
        </div>
    </div>
  );
};

export default PopularMovie;
