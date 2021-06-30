import React from "react";
import { Layout, ComicCards } from "../../components";
import { useState, useEffect } from "react";
import { getAllComics } from "../../services/comics";
import "./ComicBrowse.css";

const ComicBrowse = (props) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const allComics = await getAllComics();
      console.log(allComics);
      setComics(allComics);
    };
    fetchComics();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="comics">
        {comics.map((comic) => {
          return (
            <ComicCards
              _id={comic._id}
              title={comic.title}
              imgURL={comic.imgURL}
              price={comic.price}
              brand={comic.brand}
              description={comic.description}
            />
          )
        })}
      </div>
    </Layout>
  );
};

export default ComicBrowse;
