import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar/>
      
        
      </div>
      <div>
      <Carousel/>
      </div>
        
      </>
      
    )
  }
}
