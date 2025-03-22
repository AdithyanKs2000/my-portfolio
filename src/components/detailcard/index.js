import React from 'react';
import './index.scss';
import { jobRoles } from './constant';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function DetailCard() {
  return (
    <div className='card-container'>
 <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-play every 3 seconds
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="swiper-container"
      >
        {jobRoles.map((role, index) => (
          <SwiperSlide key={index}>
            <div className='role-container'>
              <div className='role'>
                <h2>{role.role}</h2>
              </div>
              <div className='project'>
                <p>{role.project}</p>
              </div>
              <div className='description'>
                <p>{role.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Manually added navigation buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="skills-section">
    <h2>Skills</h2>
    <div className="skills-container">
      {["React.js", "JavaScript", "HTML", "CSS", "Drupal"].map((skill, index) => (
        <div key={index} className="skill">{skill}</div>
      ))}
    </div>
  </div>
    </div>
  );
}

export default DetailCard;
