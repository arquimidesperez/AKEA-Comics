import React from "react";
import "./DeleteWishlist.css";
import { useParams } from "react-router-dom";
import { removeComicFromWishlist } from "../../services/users";

export default function DeleteWishlist(props) {
  const { id } = useParams();

  // fetchComics() need to include into the onClick;

  return (
    <>
      <div className={props.brand === 'Marvel' ? "comic-container marvel" : "comic-container dc"} >
        <div className='comic-cards-individuals'>
          <img className="comic-image" src={props.imgURL} alt={props.title} />
          <div className='comic-info-container'>
            <div className="comic-title">{props.title}</div>
            <div className="comic-brand">{props.brand}</div>

            <button onClick={(() =>
              removeComicFromWishlist(id, props._id)

            )}

            >Remove from List</button>
          </div>

        </div>

      </div>
    </>
  );
}



