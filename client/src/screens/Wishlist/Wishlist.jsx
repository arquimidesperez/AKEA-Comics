import React from 'react'
import { Layout, ComicCards } from "../../components";
import { useState, useEffect } from "react";
import { getUserWishlist, removeComicFromWishlist } from "../../services/users";
import "./Wishlist.css";
import { useParams } from 'react-router-dom';

export default function Wishlist() {
  const { id } = useParams()
  const [comics, setComics] = useState();

  useEffect(() => {
    const fetchComics = async () => {
      const allComics = await getUserWishlist(id);
      console.log(allComics);
      setComics(allComics.wishlist);
    };
    fetchComics();
  }, []);

  // const handleChange = (e) => {
  //   const selection = e.target.value;
  //   setComics(apiData);
  //   if (selection !== "All") {
  //     const filteredComics = apiData.filter(
  //       (comic) => comic.brand === selection
  //     );
  //     setComics(filteredComics);
  //   }
  // };

  return (
    <>
      <Layout >
        <div className="comics-card">
          {comics && comics.map((comic, index) => {
            return (
              <ComicCards
                _id={comic._id}
                title={comic.title}
                imgURL={comic.imgURL}
                price={comic.price}
                brand={comic.brand}
                description={comic.description}
                key={index}
              />
            );
          })}
        </div>
      </Layout>
    </>
  )
}


