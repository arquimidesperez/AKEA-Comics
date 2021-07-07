import React from 'react'
import { Layout } from "../../components";
import { useState, useEffect } from "react";
import { getUserWishlist } from "../../services/users";
import "./Wishlist.css";
import { useParams } from 'react-router-dom';
import DeleteWishlist from '../../components/DeleteWishlist/DeleteWishlist';

export default function Wishlist() {
  const { id } = useParams()
  const [comics, setComics] = useState();

  const fetchComics = async () => {
    const allComics = await getUserWishlist(id);
    setComics(allComics.wishlist);
  };

  useEffect(() => {
    fetchComics();
  }, []);


  return (
    <>
      <Layout >
        <div className="wishlist-card">
          {comics && comics.map((comic, index) => {
            return (
              <DeleteWishlist
                _id={comic._id}
                title={comic.title}
                imgURL={comic.imgURL}
                price={comic.price}
                brand={comic.brand}
                description={comic.description}
                fetchComics={fetchComics}
                key={index}
              />
            );
          })}
        </div>
      </Layout>
    </>
  )
}


