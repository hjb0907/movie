import React, { useState } from "react";

const PopularTV = ({ filterTVdData }) => {
  console.log(filterTVdData)
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShowDesc = (id) => {
    setSelectedMovie(selectedMovie === id ? null : id);
  };
  
  return (
    <div className="movie">
        <div className="movie_wrap">
          {filterTVdData.map((item, index) => (
            <div
              className="pos_r popular_tv_item"
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
              <h4>{item.name}</h4>
              {selectedMovie === item.id && (
                <div className="desc">
                  <p>{item.overview}</p>
                  <p>{item.first_air_date}</p>
                </div>
              )}

            </div>
          ))}
        </div>
    </div>
  );
};

export default PopularTV;
