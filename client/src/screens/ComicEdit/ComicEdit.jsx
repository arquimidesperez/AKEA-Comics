import { useEffect, useState }  from 'react'
import { Layout } from '../../components'
import { getComic, updateComic } from '../../services/comics'
import { useParams, Redirect } from 'react-router-dom'

export default function ComicEdit(props) {

  const [comic, setComic ] = useState({
    title: '',
    imgURL: '',
    price: null,
    brand: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchComic = async () => {
      const comic = await getComic(id)
      setComic(comic)
    }
    fetchComic()
  }, [id])
// eslint-disable-next-line
  const handleChange = (e) => {
    const { name, value } = e.target
    setComic({
      ...comic,
      [name]: value,
    })
  }
// eslint-disable-next-line
  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updateComic(id, comic)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/comics/${id}`} />
  }

  return (
    
    <Layout user={props.user} >
      <div className='comic-edit'>
      <div className='image-container'>
          <img
            className='edit-product-image'
            src={comic.imgURL}
            alt={comic.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={comic.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        </div>
    </Layout>
  )
}                  