import api from './apiConfig'

export const getAllComics = async () => {
  try {
      const response = await api.get('/comics')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getComic = async id => {
  try {
      const response = await api.get(`/comics/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createComic = async comic => {
  try {
      const response = await api.post('/comics', comic)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateComic = async (id, comic) => {
  try {
      const response = await api.put(`/comics/${id}`, comic)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteComic = async id => {
  try {
      const response = await api.delete(`/comics/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}