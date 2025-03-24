import React from "react";
import './video.scss'
function Video() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="header-video">
      <source src={`${process.env.PUBLIC_URL}/video/homevideo.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
