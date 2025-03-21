import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact  from './pages/contact'
import Header from './components/header'
import Footer from './components/footer'
import About from './pages/about'
import Worker from './pages/worker_details'

const App = () => {
  return (
    <Router>
      <Header/>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/worker' element={<Worker/>} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
