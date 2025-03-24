import React from "react";
import './sidebar.scss'
function Sidebar(){
return(
    <div className="main-sidebar">
        <div className="name-container">
            <h1>ADITHYAN KS</h1>
            <p>Frontend dev</p>
            <p className='bio'>Dynamic and detail-oriented Front-End Developer with over a year of experience specializing in
React.js. Proficient in HTML, CSS, and JavaScript, with a strong focus on designing and
implementing user interfaces, optimizing web performance. Experienced in basic site building
using Drupal, collaborating with cross-functional teams to deliver high-quality web applications.</p>
    <div className="self-pic">
    <img src={`${process.env.PUBLIC_URL}/image/self.png`} alt="Self" />
    </div>
        </div>
    </div>
)
}

export default Sidebar