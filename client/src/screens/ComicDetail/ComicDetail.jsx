import { useEffect, useState } from "react";
import "./ComicDetail.css";
import { Layout } from "../../components";
import { getComic, deleteComic } from "../../services/comics";
import { useParams, Link } from "react-router-dom";

export default function ComicDetail(props) {
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

  return (
    <Layout user={props.user}>
      <div className="detail-container">
        <div
          className={comic.brand === "Marvel" ? "detail-card marvel" : "detail-card dc"}>
          
            <img className="detail-art" src={comic.imgURL} alt={comic.title} />


            <div className="detail-information-card">

            <div className="detail-title">{comic.title}</div>
              <div className="detail-brand-price">
                Universe: {comic.brand} <br/> Price:{" "} <span className="detail-price">${comic.price}</span>
              </div>

            <div className="detail-purchase-card">
              <Link to={`/purchase/${id}`}>
                <button className="detail-purchase">Buy Now</button>
              </Link> 
            </div>

            <div className="detail-description-card">
              <div className="detail-description">{comic.description}</div>
            </div>
          </div>
          </div>
        

                                  <div className="detail-buttons">

                                    <div>
                                      <Link to={`/edit-comic/${id}`}>
                                        <button className="detail-edit">Edit</button>
                                      </Link>
                                    </div>

                                    <div>
                                      <Link to="/comics">
                                        <button className="detail-delete" onClick={() => deleteComic(comic._id)}>Delete </button>
                                      </Link>
                                    </div>

                                  </div>
        
      </div>
    </Layout>
  );
}
