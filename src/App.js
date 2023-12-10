import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Skill from './components/Skill'
import Project from './components/Project'
import About from './components/About'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
