import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

import { FooterSliData } from "../data/Footer_sli_data";

const FooterSli = () =>{
  return(
    <div className="footersli">
      <div className="inner">
        <div className="sli_wrap">
          <h3 className="draggable">공지사항</h3>
            <Swiper
              keyboard={{
                enabled: true,
              }}
              navigation={true}
              modules={[Autoplay,Keyboard, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="footer_sli"
            >
              {FooterSliData.map((i, index) => (
                <SwiperSlide key={index}>
                  <div className="slide draggable"><p className="draggable">{i.desc}</p></div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FooterSli;