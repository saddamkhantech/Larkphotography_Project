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
      <img class="d-block w-100 c-image" src="https://media.istockphoto.com/id/1147912347/photo/portrait-of-a-indian-bride-in-studio-light-asian-bride.jpg?s=1024x1024&w=is&k=20&c=8a9k-6Pkt8Yq3c5fwp56c7K2_-8FYRldEeO4KXNCqWw=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item c-item">
      <img class="d-block w-100 c-image" src="https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/09/Portraits-New-Born-1024x688.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item c-item">
      <img class="d-block w-100 c-image" src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2022/07/essential-props-fstoppers-helenarosephotography-080-edit1.jpg" className="d-block w-100" alt="..."/>
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