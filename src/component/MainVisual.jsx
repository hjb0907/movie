import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const MainVisual = ({filteredData}) => {
  return(
    <div className="mainvisual">
      <>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="main_visual_sli"
        >
          {filteredData.map((i, index) => (
            <SwiperSlide key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${i.backdrop_path}`}
                alt={`Backdrop ${index}`}
              />
              <h3 className="movie_name">{i.title}</h3>
            </SwiperSlide>
          ))}       
        </Swiper>
      </>
    </div>
  )
}

export default MainVisual;