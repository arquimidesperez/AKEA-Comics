import { useEffect, useState, useContext } from "react";
import "./Purchase.css";
import { Layout } from "../../components";
// eslint-disable-next-line
import { getComic } from "../../services/comics";
// eslint-disable-next-line
import { useParams } from "react-router-dom";
import { userContext } from '../../utils/Context'


export default function Purchase() {
  const user = useContext(userContext)
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
  return (
    <Layout >
      <div className="purchase-comic">

        <div className={comic.brand === 'Marvel' ? "purchase-container marvel" : "purchase-container dc"}>

          <img
            className="comicbook-art"
            src={comic.imgURL}
            alt={comic.title}
          />

          <div className="purchase-information">
            <div className="purchase-info-conditional">{user ? `Thank you for your purchase of: ` : `Please login to buy this comic:`}</div>
            <div className='comic-title-purchase'>{comic.title}</div>
            <div className="purchase-email">{user ? `An email will be sent to your account on file for payment options.` : null}</div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
