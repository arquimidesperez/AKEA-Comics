import { useEffect, useState, useContext } from "react";
import './ComicEdit.css'
import { Layout } from "../../components";
import { getComic, updateComic } from "../../services/comics";
import { useParams, Redirect } from "react-router-dom";
import { userContext } from "../../utils/Context";
import SignUp from "../SignUp/SignUp";

export default function ComicEdit(props) {
  const user = useContext(userContext)
  const [comic, setComic] = useState({
    title: "",
    imgURL: "",
    price: null,
    brand: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchComic = async () => {
      const comic = await getComic(id);
      setComic(comic);
    };
    fetchComic();
  }, [id, props.user]);
  // eslint-disable-next-line
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComic({
      ...comic,
      [name]: value,
    });
  };
  // eslint-disable-next-line
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateComic(id, comic);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/comics/${id}`} />;
  }

  if (!user) {
    return <SignUp />
  } else return (
    <Layout >
      <div className="comic-edit">
        <div className={comic.brand === 'Marvel' ? "editor-container marvel" : "editor-container dc"}>
          <img
            className="edit-product-image"
            src={comic.imgURL}
            alt={comic.name}
          />

          <div className='edit-information'>
            <form onSubmit={handleSubmit}>
              <div className='editor-text'> Title </div>
              <input
                className="input-name"
                placeholder="title"
                value={comic.title}
                name="name"
                required
                autoFocus
                onChange={handleChange}
              />
            </form>
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className='editor-text'> Image Source </div>
              <input
                className="input-image-link"
                placeholder="Image Link"
                value={comic.imgURL}
                name="imgURL"
                required
                onChange={handleChange}
              />

              <div className='editor-text'> Price </div>
              <input
                className="input-price"
                placeholder="Price"
                value={comic.price}
                name="price"
                required
                onChange={handleChange}
              />

              <div className='editor-text'> Brand </div>
              <input
                className="input-brand"
                placeholder="DC or Marvel"
                value={comic.brand}
                name="brand"
                required
                onChange={handleChange}
              />
              <div className='editor-text'> Summary </div>
              <textarea
                className="textarea-description"
                rows={10}
                cols={78}
                placeholder="Description"
                value={comic.description}
                name="description"
                required
                onChange={handleChange}
              />
              <br />
              <button type="submit" className="save-button">
                Save Edits
              </button>
            </form>
          </div>


        </div>

      </div>
    </Layout>
  );
}
