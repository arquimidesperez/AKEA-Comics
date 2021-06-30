import React from "react";
import { Layout, ComicCards } from "../../components";
import { useState, useEffect } from "react";
import { getAllComics } from "../../services/comics";
import "./ComicBrowse.css";

const ComicBrowse = (props) => {
  const [comics, setComics] = useState([]);
  const [brand, setBrand] = useState("")

  useEffect(() => {
    const fetchComics = async () => {
      const allComics = await getAllComics();
      console.log(allComics);
      setComics(allComics);
    };
    fetchComics();
  }, []);

  handleChange = (e) => {
    const selection = e.target.value
    
    switch (selection) {
      case 'Marvel':
        setBrand()
        
        break;
      case 'DC':
        setBrand()
        
        break;
      
      case 'All':
        setBrand()

        break;
      
      default:
        
        break;
        
    }
  }



  return (
    <Layout user={props.user}>
      <form className="sort" onChange={handleChange}>
        <label>Sort By:</label>
        <select>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
          <option value="All">All Comics</option>
        </select>
      </form>
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
              key = {index}
            />
          )
        })}
      </div>
    </Layout>
  );
};

export default ComicBrowse;
