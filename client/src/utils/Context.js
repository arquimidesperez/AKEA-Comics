import { useState, createContext } from "react";

export const userContext = createContext()
export const setUserContext = createContext()
export const Provider = (props) => {
  const [user, setUser] = useState()

  return (
    <>
      <setUserContext.Provider value={ setUser }>
      <userContext.Provider value={ user }>
        {props.children}
      </userContext.Provider>
      </setUserContext.Provider>
    </>
  )
}
