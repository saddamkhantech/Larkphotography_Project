import React, { Component } from 'react'
import './Carousel.css'
import VideoCard from "./VideoCard";
import Images from './Images';
export default class DestinationWedding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : false
      
    };
  }

  handleDisplayImages=()=>
  {
    this.setState({ show: this.state.count = false })
  }
  handleDisplayVideos=()=>
  {
    this.setState({ show: this.state.count = true })
  }
  render() {
    return (
      <div>
      <div className="btns">
      <button  id={this.state.show?"btnUnclicked":"btnClicked"}onClick={this.handleDisplayImages}>Image</button>
      <button  id={this.state.show?"btnClicked":"btnUnclick"} onClick={this.handleDisplayVideos}>videos</button>
      </div>
      {
      this.state.show?<VideoCard photoType="destination wedding"/>:<Images photoType="destination wedding"/>

      }</div>
    )
  }
}
