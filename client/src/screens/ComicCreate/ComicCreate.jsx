import React from 'react'
import { Layout } from '../../components'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createComic } from '../../services/comics'

export default function ComicCreate(props) {
  const [isCreated, setCreated] = useState(false)

  const ComicCreate = (props) => {
    const [comic, setComic] = useState({
      title: '',
      description: '',
      imgURL: '',
      price: '',
      brand: ''
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

    return (
      // remvoed until needed from layout user={props.user}
      <Layout >
        <div className='comic-browse'>
          <form className='create-form' onSubmit={handleSubmit}>
            <input
              className='input-title'
              placeholder='Title'
              value={comic.title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className='input-price'
              placeholder='Price'
              value={comic.price}
              name='price'
              required
              onChange={handleChange}
            />
            <textarea
              className='textarea-description'
              rows={10}
              placeholder='Description'
              value={comic.description}
              name='description'
              required
              onChange={handleChange}
            />
            <input
              className='input-image-link'
              placeholder='Image Link'
              value={comic.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
            <input
              className='input-brand'
              placeholder='DC or Marvel'
              value={comic.brand}
              name='brand'
              required
              onChange={handleChange}
            />
            <button type='submit' className='submit-button'>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}
