import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Post from './pages/Post'
import Signup from './pages/Signup'
import Signin from './pages/Signin'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
