import React from "react";
import "./ComicCards.css";
import { Link } from "react-router-dom";

export default function ComicCards(props) {
  return (
    <>
      <Link className="comic" to={`/comics/${props._id}`}>
        <img className="comic-image" src={props.imgURL} alt={props.title} />
        <div className="comic-title">{props.title}</div>
        <div className="comic-brand">{props.brand}</div>
      </Link>
    </>
  );
}
