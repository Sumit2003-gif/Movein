import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import { Routes ,Route} from 'react-router-dom'
import Footer from './pages/Footer'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogDetail from './Components/BlogDetail'
import Contact from './pages/Contact'

function App() {

  return (
      <div className=''>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        
        <Footer/>

      </div>
  )
}

export default App
