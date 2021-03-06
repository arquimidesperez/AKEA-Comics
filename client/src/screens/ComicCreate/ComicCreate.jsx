import React from 'react'
import './ComicCreate.css'
import { Layout } from '../../components'
import { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { createComic } from '../../services/comics'
import { userContext } from '../../utils/Context'
import ComicBrowse from '../ComicBrowse/ComicBrowse'

export default function ComicCreate() {
  const user = useContext(userContext)
  const [isCreated, setCreated] = useState(false)


  const [comic, setComic] = useState({
    title: '',
    description: '',
    imgURL: '',
    price: '',
    brand: '',
    backgroundImage: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setComic({
      ...comic,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createComic(comic)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/comics`} />
  }

  if (!user) {
    return <ComicBrowse />
  } else return (
    <Layout >
      <div className='comic-create'>
        <form className='create-form' onSubmit={handleSubmit}>
          <div className='create-form-title'>Add a New Comic Book</div>
          <input
            className='create-input-title'
            placeholder='Title'
            value={comic.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-image-link'
            placeholder='Image URL'
            value={comic.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-price'
            placeholder='Price'
            value={comic.price}
            name='price'
            required
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-brand'
            placeholder='Brand (DC or Marvel)'
            value={comic.brand}
            name='brand'
            required
            onChange={handleChange}
          />
          <br />
          <input
            className='create-background-image'
            placeholder='Background Image'
            value={comic.backgroundImage}
            name='background-image'
            onChange={handleChange}
          />
          <br />
          <textarea
            className='create-textarea-description'
            rows={10}
            placeholder='Description'
            value={comic.description}
            name='description'
            required
            onChange={handleChange}
          />
          <br />
          <button type='submit' className='create-submit-button'>
            CREATE
          </button>
        </form>

      </div>


    </Layout>
  )
}

