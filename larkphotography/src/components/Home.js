


import './Carousel.css'
import VideoCard from "./VideoCard";
import Carousel from "./Carousel";
import {useState} from 'react';




import React, { Component } from 'react';
import ImageCard from './imageCard';
import ReactVideoGallery from './ReactVideoGallery';






export default class App extends Component {

  handleDisplayImages=()=>
  {
    console.log("image");
    
    
    
  }
  handleDisplayVideos=()=>
  {
    console.log("video");
    
  }

  render() {
    
    return (
     <div>
      <Carousel/>
      <div className="btns">
      <button onClick={this.handleDisplayImages}>Image</button>
      <button onClick={this.handleDisplayVideos}>videos</button>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4">
          <ImageCard imageUrl="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg?w=2000"/>
          </div>
          <div className="col-md-4">
          <ImageCard imageUrl="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg?w=2000"/>
          </div>
          <div className="col-md-4">
          <ImageCard imageUrl="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg?w=2000"/>
          </div>
          <div className="col-md-4">
          <ImageCard imageUrl="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg?w=2000"/>
          </div>
        </div>
      </div>


    </div>
    
    
     
     
    );
  }
}


