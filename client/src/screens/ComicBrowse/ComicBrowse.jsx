import React from "react";
import { Layout, ComicCards } from "../../components";
import { useState, useEffect } from "react";
import { getAllComics } from "../../services/comics";
import "./ComicBrowse.css";

const ComicBrowse = (props) => {
  const [apiData, setApiData] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const allComics = await getAllComics();
      console.log(allComics);
      setApiData(allComics);
      setComics(allComics);
    };
    fetchComics();
  }, []);

  const handleChange = (e) => {
    const selection = e.target.value;
    setComics(apiData);
    if (selection !== "All") {
      const filteredComics = apiData.filter(
        (comic) => comic.brand === selection
      );
      setComics(filteredComics);
    }
  };

  return (
    <Layout user={props.user}>
      <h1 className='header-image-browse'>.</h1>
      <div className='sort-container'>
        <form className="sort" onChange={handleChange}>
          <label>Sort By: </label>
          <select>
            <option value="All">All Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
          </select>
        </form>
      </div>

      <div className="comics-card">
        {comics.map((comic, index) => {
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
  );
};

export default ComicBrowse;
