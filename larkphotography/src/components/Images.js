
import { createClient } from 'pexels';
import React, { Component } from 'react'
import './Gallery.css'



const apiKey = "zW5MFlXxJpVUMblMNNYM0xDmPBgqZQGf5fJOC0wZG76HY9KZfGdqn8HO";



export default class App extends Component {

  constructor()
  {
      super();
      console.log("hello im constructor");
      this.state={
          src: null,
          file: null
      
      }
  }
  async componentDidMount()
    {
      console.log("cdm");
      const client = createClient('zW5MFlXxJpVUMblMNNYM0xDmPBgqZQGf5fJOC0wZG76HY9KZfGdqn8HO');
      const query = this.props.photoType;
      await client.photos.search({ query, per_page: 12 }).then(photos => {this.setState({src:photos.photos})});
      let data=(this.state.src);
      
      console.log(typeof(data));
      if(data!=null)
      {
        console.log("im not empty")
        Object.values(data).map(x=>console.log(x));
      }
      
      
    }
  render() {
    
    //let fdata=(this.state.src);
     console.log("im render");
    // console.log(Media);
    
    return (
      
     
      <div className='container'>
      
      <div className="media-container">
        {
          
          
         (this.state.src!=null)? Object.values(this.state.src).map((mapfile,index)=>(
          
            <div className="media" key={index}onClick={()=>this.setState({file:mapfile})}>
              {
                (mapfile!=null)?<img src={mapfile.src.original}/>:console.log("mapfile is empty")
                
                 
                //add #t=0.001 to load video thumnail on mobile
               
              }
            
            </div>
            
            
          ))
          :console.log("im empty king")
        }
      </div>
      <div className="popup-media" style={{display: this.state.file? 'block' : 'none'}}>
        <span onClick={()=>this.setState({file:null})}>&times;</span>
        {
          (this.state.file!=null)?<img src={this.state.file.src.original}/>:console.log("file is empty")
          
          
        }
      </div>
    </div>
     
    )
  }
}





  


  
  

 