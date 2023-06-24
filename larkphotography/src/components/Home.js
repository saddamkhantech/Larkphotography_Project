

import {useState} from 'react';




import React, { Component } from 'react';
import './Carousel.css'
import VideoCard from "./VideoCard";
import Carousel from "./Carousel";


import Images from './Images';






export default class App extends Component {

  handleDisplayImages=()=>
  {
    this.setState({ show: this.state.count = false })
  }
  handleDisplayVideos=()=>
  {
    this.setState({ show: this.state.count = true })
  }
  
  constructor(props) {
    super(props);
    this.state = {
      show : false
      
    };
  }

  


  render() {
    
    return ( 
     <div>
      <Carousel/>
      <div className="btns">
      <button  id={this.state.show?"btnUnclicked":"btnClicked"}onClick={this.handleDisplayImages}>Image</button>
      <button  id={this.state.show?"btnClicked":"btnUnclick"} onClick={this.handleDisplayVideos}>videos</button>
      </div>
      {
      this.state.show?<VideoCard photoType="trending video"/>:<Images photoType="trending photos"/>

      }

    </div>
    
    
     
     
    );
  }
}


