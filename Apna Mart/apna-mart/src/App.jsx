import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Stores from './pages/Stores.jsx'
import Franchise from './pages/Franchise.jsx'
import Footer from './components/Footer.jsx'
import Blog from './pages/Blog.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stores' element={<Stores />} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/franchise' element={<Franchise />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
