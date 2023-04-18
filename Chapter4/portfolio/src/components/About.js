import React from 'react';
import home1 from '../img/home1.png';


const About = () => {
    return(
    <div className="description">
        <div className="title">
            <div className="hide">
                <h2>We ork to make</h2>
            </div>
            <div className="hide">
                <h2>your <span>Dreams</span> yome </h2>
            </div>
            <div className="hide">
                <h2>True</h2>
            </div>
        </div>
        <p>Contact us and we will take your ideas and create something unique for you.</p>
        <button>Contact</button>
        <div className="img">
            <img src={home1} alt="Guy with camera" />
        </div>
    </div>
    )
}

 export default About;