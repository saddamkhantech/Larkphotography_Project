import React, { Component } from 'react'


 export class imageCard extends Component {
  render() {

    let{imageUrl}=this.props;


    return (
        <div className="my-3">
        <div className="card" style={{width: "18rem" }}>
        <img src={imageUrl}className="card-img-top" alt="..."/>
        
        </div>
        </div>
    )
  }
}
export default imageCard