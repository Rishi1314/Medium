import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Post from './pages/Post'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Posts from './pages/Posts'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
