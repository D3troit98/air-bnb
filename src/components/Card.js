import React from "react";

import starLogo from "../images/Star 1.png"

import  data from "../data";

export default function Card(props)
{ 
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.item.location=== "Online" || "online") {
        badgeText = "ONLINE"
    }else{
        badgeText = false
    }
    console.log(`props ${props.item.coverImg}`)
    return(
        
        <div className="card">   
       {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="card--image" alt="Katie" src={`../images/${props.item.coverImg}`}/>
        <div className="card--stats">
        <img className="star" src={starLogo} alt="lana Rhodes" />
            <span>{props.item.stats.rating}</span>
            <span className="grey">({props.item.stats.reviewCount}) • </span>
            <span className="grey">{props.item.country}</span>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold"> from {props.item.price}</span>/person</p>
        </div>
            
             </div>
    )
}