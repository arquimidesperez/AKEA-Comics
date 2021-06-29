import React from 'react'
import { useEffect, useState }  from 'react'
import { Layout } from '../../components'
import { getComic, deleteComic } from '../../services/comics'
import { useParams, Link } from 'react-router-dom'

export default function ComicDetail(props) {
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