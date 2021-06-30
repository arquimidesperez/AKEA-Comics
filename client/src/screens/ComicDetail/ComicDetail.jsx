import React from 'react'
import { useEffect, useState }  from 'react'
import { Layout } from '../../components'
// eslint-disable-next-line
import { getComic, deleteComic } from '../../services/comics'
// eslint-disable-next-line
import { useParams, Link } from 'react-router-dom'

export default function ComicDetail(props) {
  // eslint-disable-next-line
  const [comic, setComic] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchComic = async () => {
      const comic = await getComic(id)
      setComic(comic)
      setLoaded(true)
    }
    fetchComic()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    // remvoed until needed from layout user={props.user}
    <Layout >
      <div className='comic-browse'>
        hello from comic details
      </div>
    </Layout>
  )
}