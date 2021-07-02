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
            
            <img
              className="comicbook-art"
              src={comic.imgURL}
              alt={comic.title}
            />

          <div className="purchase-information">
            <div className="purchase-info-conditional">{props.user ? `Thank you for your purchase of: ` : `Please login to buy this comic:`}</div>
            <div className='comic-title-purchase'>{comic.title}</div>
            <div className="purchase-email">{props.user ? `An email will be sent to your account on file for payment options.` : null}</div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
