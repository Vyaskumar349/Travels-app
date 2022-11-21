import React from 'react';

const DestinationData=(props)=>{
    return(
        <div className={props.cName}>
        <div className="des-text">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
        </div>
        <div className={props.imgCname}>

        <img alt="img" src={props.img1}/>
        <img alt="img" src={props.img2}/>
        </div>
    </div>
    )
}
export default DestinationData;