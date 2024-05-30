import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Faq from './Components/Faq'
import PFD from './Components/PFD'
import BasicInfo from './pages/BasicInfo'
import Educations from './pages/Educations'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Languages from './pages/Languages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="basicInfo" element={<BasicInfo />} />
          <Route path="education" element={<Educations />} />
          <Route path="experience" element={<Experiences />} />
          <Route path="project" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="languages" element={<Languages />} />
          <Route path="signUp" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="faq" element={<Faq />} />
          <Route path="preview" element={<PFD />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
