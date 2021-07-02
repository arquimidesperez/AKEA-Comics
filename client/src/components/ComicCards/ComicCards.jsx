import React from "react";
import "./ComicCards.css";
import { Link } from "react-router-dom";

export default function ComicCards(props) {
  return (
    <>
      <div className={props.brand === 'Marvel' ? "comic-container marvel" : "comic-container dc"} >
        <Link className="comic" to={`/comics/${props._id}`}>

            <div className='comic-cards-individuals'>
              {/* <div className='comic-image-container'> */}
              <img className="comic-image" src={props.imgURL} alt={props.title} />
            {/* </div> */}

            <div className='comic-info-container'>
              <div className="comic-title">{props.title}</div>
  
            </div>

          </div>
          
        </Link>
      </div>
    </>
  );
}
