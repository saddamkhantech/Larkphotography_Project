import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Wedding from "./components/Wedding";
import PreWedding from "./components/PreWedding";
import DestinationWedding from "./components/DestinationWedding";
import BabyPhotoShoot from "./components/BabyPhotoShoot";
import ProductPhotoGraphy from "./components/ProductPhotoGraphy";
import ModelPhotoShoot from "./components/ModelPhotoShoot";
import About from "./components/About";

import { BrowserRouter,Routes,Route } from 'react-router-dom'



import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      
<BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route   path="/Larkphotography_Project" element={<Home/>}></Route>
        <Route   path="/" element={<Home/>}></Route>
        <Route  exact path="/wedding" element={<Wedding/>}></Route>
        <Route  exact path="/prewedding" element={<PreWedding/>}></Route>
        <Route  exact path="/desWeding" element={<DestinationWedding/>}></Route>
        <Route  exact path="/babyPhoto" element={<BabyPhotoShoot/>}></Route>
        <Route  exact path="/productPhoto" element={<ProductPhotoGraphy/>}></Route>
        <Route  exact path="/modelPhoto" element={<ModelPhotoShoot/>}></Route>
        <Route  exact path="/about" element={<About/>}></Route>
      </Routes>
      
    </BrowserRouter>
      
      
    )
  }
}
