
import './App.css'
import About from './components/About'
import Details from './components/Details'
import NotFound from './components/NotFound'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
