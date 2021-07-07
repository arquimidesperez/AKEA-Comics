import React from 'react'
import { Layout } from "../../components";
import { useState, useEffect } from "react";
import { getUserWishlist } from "../../services/users";
import "./Wishlist.css";
import { useParams } from 'react-router-dom';
import WishlistCard from '../../components/WishlistCard/WishlistCard';

export default function Wishlist() {
  const { id } = useParams()
  const [wishlist, setWishlist] = useState();

  useEffect(() => {
    const fetchWishlist = async () => {
      const user = await getUserWishlist(id);
      setWishlist(user.wishlist);
    };

    fetchWishlist();
  }, []);

  const removeFromWishlist = (comicId) => {
    const updatedWishlist = wishlist.filter((comic) => comic._id !== comicId)
    setWishlist(updatedWishlist)
  }
  console.log("test")
  return (
    <>
      <Layout >
        <div className='wishlist-background'>
          <div className="wishlist-card">
            {wishlist && wishlist.map((comic, index) => {
              return (
                <WishlistCard
                  _id={comic._id}
                  title={comic.title}
                  imgURL={comic.imgURL}
                  price={comic.price}
                  brand={comic.brand}
                  description={comic.description}
                  removeFromWishlist={removeFromWishlist}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}


