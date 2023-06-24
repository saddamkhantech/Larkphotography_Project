import React, { Component } from 'react'

import './Carousel.css'


export   class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active c-item">
      <img className="d-block w-100 c-image" src="https://www.daysoftheyear.com/wp-content/uploads/carousel-day.jpg"  alt="..."/>
    </div>
    <div className="carousel-item c-item">
      <img className="d-block w-100 c-image" src="https://meganandkenneth.com/wp-content/uploads/2021/09/KaraDave_Wedding_MB_8123.jpg"  alt="..."/>
    </div>
    <div className="carousel-item c-item">
      <img className="d-block w-100 c-image" src="https://images.squarespace-cdn.com/content/v1/5080a3f8e4b0ffcfe70bf7ca/1564517290411-5GEGHFLUGHIGXR6Y0DUZ/Janes+Carousel+Brooklyn+Dumbo+Loft+Wedding_0-127.JPG?format=1500w" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    )
  }
}
export default Carousel