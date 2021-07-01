import { useEffect, useState } from "react";
import "./Purchase.css";
import { Layout } from "../../components";
// eslint-disable-next-line
import { getComic } from "../../services/comics";
// eslint-disable-next-line
import { useParams } from "react-router-dom";

export default function Purchase(props) {
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
      <div className="purchase-comic">
          <div className={comic.brand === 'Marvel' ? "purchase-container marvel" : "purchase-container dc"}>
            <div className="comicbook-cover">
              <img
                className="comicbook-art"
                src={comic.imgURL}
                alt={comic.title}
              />
            </div>
          <div className="purchase-information">
            <div>Thank you for your purchase of: <br /> {comic.title}</div>
            <br/>
            <div>An email will be sent to your account on file for payment options.</div>

            </div>
          </div>
      </div>
    </Layout>
  );
}
