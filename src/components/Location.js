import React from "react"

export default function Location(props) {
    return(
        <div className="card">
            <img src={props.item.image} alt="{props.item.location}" />
            <div className="card--info">
                <div className="card--header">
                    <i className="fa-solid fa-location-dot location--pin"></i>
                    <h4>{props.item.country}</h4>
                    <a href="#">View on Google Maps</a>
                </div>
                <h2>{props.item.location}</h2>
                <span>{props.item.dates}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}