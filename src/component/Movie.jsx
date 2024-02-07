import React, { useState } from "react";

const Movie = ({ filteredData }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShowDesc = (id) => {
    setSelectedMovie(selectedMovie === id ? null : id);
  };
  
  return (
    <div className="movie">
        <div className="movie_wrap">
          {filteredData.map((item, index) => (
            <div
              className="pos_r movie_item"
              key={index}
              id={item.id}
              onClick={() => handleShowDesc(item.id)}
            >
              <div
                className="img_area"
                style={{
                  background: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}) center center/cover no-repeat`,
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

export default Movie;
