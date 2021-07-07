import React from "react";
import "./WishlistCard.css";
import { useParams } from "react-router-dom";
import { removeComicFromWishlist } from "../../services/users";

export default function WishlistCard(props) {
  const { id } = useParams();

  return (
    <>
      <div className={props.brand === 'Marvel' ? "wishlist-container marvel" : "wishlist-container dc"} >
        <div className='wishlist-cards-individuals'>
          <img className="wishlist-image" src={props.imgURL} alt={props.title} />
          <div className='wishlist-info-container'>
            <div className="wishlist-title">{props.title}</div>
            <div className="wishlist-brand">{props.brand}</div>

            <button className="wishlist-button" onClick={() => {
              removeComicFromWishlist(id, props._id)
              props.removeFromWishlist(props._id)
            }}>
              Remove from List
            </button>
          </div>

        </div>

      </div>
    </>
  );
}



