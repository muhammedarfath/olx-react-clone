import React,{createContext,useState} from 'react'

export const PostContext = createContext(null)

function ViewContext({ children }) {
  const [postDetails, setPostDetails] = useState();
  return (
    <PostContext.Provider value={{postDetails,setPostDetails}}>
      {children}
    </PostContext.Provider>
  )
}

export default ViewContext
