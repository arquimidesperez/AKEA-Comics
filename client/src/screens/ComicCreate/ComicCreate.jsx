import React from 'react'
import { Layout } from '../../components'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createComic } from '../../services/comics'

export default function ComicCreate(props) {
  const [isCreated, setCreated] = useState(false)


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
      
      <Layout user={props.user} >
        <div className='comic-create'>
          <form className='create-form' onSubmit={handleSubmit}>
            <input
              className='input-image-link'
              placeholder='Image Link'
              value={comic.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
            <br />
            <input
              className='input-title'
              placeholder='Title'
              value={comic.title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
            />
            <br />
            <input
              className='input-price'
              placeholder='Price'
              value={comic.price}
              name='price'
              required
              onChange={handleChange}
            />
            <br />
              <input
                className='input-brand'
                placeholder='DC or Marvel'
                value={comic.brand}
                name='brand'
                required
                onChange={handleChange}
            />
            <br />
            <textarea
              className='textarea-description'
              rows={10}
              placeholder='Description'
              value={comic.description}
              name='description'
              required
              onChange={handleChange}
            />
            <br />
            <button type='submit' className='submit-button'>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }

