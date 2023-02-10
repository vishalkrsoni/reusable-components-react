import React from "react";
import './VerticalCardSlider.css'
import antMan from '../../../public/Avengers/AntMan.jpeg'
import pic1 from '../../../public/Avengers/BatMan.jpeg'
import pic2 from '../../../public/Avengers/BlackPanther.jpeg'
import pic3 from '../../../public/Avengers/DeadPool.jpeg'
import pic4 from '../../../public/Avengers/Hulk.jpeg'

const VerticalCardSlider = () => {
  return (
      <div className="slider__container">
        <div className="wrapper">
          <div className="outer">
            <div className="card" style={{ "--delay": "-1" }}>
              <div className="content">
                <div className="img">
                  <img src={pic1} alt="" />
                </div>
                <div className="details">
                  <span className="name">Sumit Kapoor</span>
                  <p>Frontend Developer</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>
            <div className="card" style={{ "--delay": "0" }}>
              <div className="content">
                <div className="img">
                  <img src={pic2} alt="" />
                </div>
                <div className="details">
                  <span className="name">Andrew Neil</span>
                  <p>YouTuber & Blogger</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>
            <div className="card" style={{ "--delay": "1" }}>
              <div className="content">
                <div className="img">
                  <img src={pic3} alt="" />
                </div>
                <div className="details">
                  <span className="name">Jasmine Carter</span>
                  <p>Freelancer & Vlogger</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>
            <div className="card" style={{ "--delay": "2" }}>
              <div className="content">
                <div className="img">
                  <img src={pic4} alt="" />
                </div>
                <div className="details">
                  <span className="name">Justin Chung</span>
                  <p>Backend Developer</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>
            <div className="card" style={{ "--delay": "2" }}>
              <div className="content">
                <div className="img">
                  <img src={antMan} alt="" />
                </div>
                <div className="details">
                  <span className="name">Adrina Calvo</span>
                  <p>Teacher & Advertiser</p>
                </div>
              </div>
              <a href="#">Follow</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default VerticalCardSlider;
