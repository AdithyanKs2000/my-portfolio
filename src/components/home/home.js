import React from "react";
import Video from "../video/video";
import './home.scss'
import Sidebar from "../sidebar/sidebar";
import DetailCard from "../detailcard/index";
import Education from "../education/education";
import Email from "../email/email";


function Home(){
return(
    <div className="main-container">
        <div className="heading-container"><h1>Portfolio.</h1></div>
        <Sidebar/>
        <DetailCard/>
        <Education/>
        <Email/>
    </div>
)
}
export default Home