import React from "react";

export default function ServiceCardComponent(props) {
  return (
    <div className="service-card">
      <div className="count">{props.count}</div>
      <div className="card-title">{props.title}</div>
      <div className="description">
        {props.description}
      </div>
    </div>
  );
}
