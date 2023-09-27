import React from "react";
import "../styles/card.css";

export default function DestinationCard(props) {
  return (
    <div className="card--container">
      <div className="card_img--container">
        <img src={props.item.imageUrl} className="card_img" />
      </div>
      <div className="card_details--container">
        <div className="card_location_link">
          <img src="../../public/location.svg" className="location--icon" />
          <p className="country">{props.item.location}</p>
          <a
            href={props.item.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card_link"
          >
            View on Google Maps
          </a>
        </div>
        <div className="card--details">
          <h1 className="destination_title">{props.item.title}</h1>
          <p className="visit_details">{props.item.visitDate}</p>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
