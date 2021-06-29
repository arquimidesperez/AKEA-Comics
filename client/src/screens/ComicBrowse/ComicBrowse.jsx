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
      setComics(allComics);
    };
    fetchComics();
  }, []);

  return (
    <Layout>
      <div className="comics">
        <ComicCards
          _id={comics._id}
          title={comics.title}
          imgURL={comics.imgURL}
          price={comics.price}
          brand={comics.brand}
          description={comics.description}
        />
      </div>
    </Layout>
  );
};

export default ComicBrowse;
