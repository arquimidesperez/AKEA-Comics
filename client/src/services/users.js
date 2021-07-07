import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/sign-up", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post('/login', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get('/verify')
    return res.data
  }
  return false
}

export const changePassword = async (data) => {
  try {
    const resp = await api.post("/change-password", data);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUserWishlist = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/wishlist`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const addComicToWishlist = async (userId, comicId) => {
  try {
    const response = await api.put(`/users/${userId}/wishlist/${comicId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const removeComicFromWishlist = async (userId, comicId) => {
  try {
    const response = await api.delete(`/users/${userId}/wishlist/${comicId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

// export const getUserComic = async (userId, comicId) => {
//   try {
//     const response = await api.get(`/users/${userId}/comics/${comicId}`)
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

// export const createUserComic = async (userId, comicId) => {
//   try {
//     const response = await api.post(`/users/${userId}/comics`)
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

// export const deleteUserComic = async (userId, comicId) => {
//   try {
//     const response = await api.delete(`/users/${userId}/comics/${comicId}`)
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

