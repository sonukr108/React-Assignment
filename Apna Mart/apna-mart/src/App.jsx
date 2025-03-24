import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Router, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Router>
        <Route>
          
        </Route>
      </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
