import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Experience from './Pages/EXperience/Experience.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Skills from './Pages/Skills/Skills.jsx'
import Blogs from './Pages/Blogs/Blogs.jsx'
function App() {

  return (
    <>
      <div>
       <Navbar/>
       <div className='container'>
       <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
       </Routes>
        </div>
        <Footer/>
        
      </div>
      
    </>
  )
}

export default App
