import React from "react";
import './video.scss'
function Video() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="header-video">
        <source src="/video/homevideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
