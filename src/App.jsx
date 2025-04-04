import React from 'react'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './css/App.css'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main className="main-content">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/favorites' element={<Favorites/>}></Route>
            </Routes>
        </main>
      </Router>
    </>
  )
}

export default App