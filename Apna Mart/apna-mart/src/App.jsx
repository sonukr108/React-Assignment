import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Contact from './pages/Contact.jsx'
import Stores from './pages/Stores.jsx'
import Franchise from './pages/Franchise.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/stores' element={<Stores />} />
          <Route path='/franchise' element={<Franchise />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
