import { useEffect, useState } from "react";
import "./ComicDetail.css";
import { Layout } from "../../components";
// eslint-disable-next-line
import { getComic, deleteComic } from "../../services/comics";
// eslint-disable-next-line
import { useParams, Link } from "react-router-dom";

export default function ComicDetail(props) {
  // eslint-disable-next-line
  const [comic, setComic] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchComic = async () => {
      const comic = await getComic(id);
      setComic(comic);
      setLoaded(true);
    };
    fetchComic();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  console.log(comic.id);
  return (
    <Layout user={props.user}>
      <div className="comic-details">
        <div className="comic-container">
          <div className="comicbook-cover">
            <img
              className="comicbook-art"
              src={comic.imgURL}
              alt={comic.title}
            />
          </div>
          <div className="comic-information">
            <div className="title">{comic.title}</div>
            <div className="description">{comic.description}</div>
            <div className="price">{comic.price}</div>
          </div>
        <div>
            <Link to={`/purchase/${id}`}>
            <button>Purchase</button>
            </Link>
        </div>
        </div>
        <Link to={`/edit-comic/${id}`}>
          <button>Edit</button>
        </Link>
        <Link to="/comics">
          <button
            className="delete-button"
            onClick={() => deleteComic(comic._id)}
          >
            Delete
          </button>
        </Link>
      </div>
    </Layout>
  );
}
