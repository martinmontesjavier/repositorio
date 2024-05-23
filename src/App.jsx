import './App.css'

import { Footer } from './componentes/footer'
import { Home } from './componentes/home'
import { AboutMe } from './componentes/aboutMe.jsx'
import { Projects } from './componentes/projects.jsx'
import { Contact } from './componentes/contact'
import { Header } from './componentes/Header.jsx'





function App() {
 

  return (
    <>
    <div>
      <div className='header'>
        <Header></Header>
      </div>
      <div id='home' className='home'>
        <Home></Home>
      </div>
      <div id='about' className='about-me'>
        <AboutMe></AboutMe>
      </div>
      <div id='projects' className='projects'>
        <Projects></Projects>
      </div>
      <div id='contact' className='contact'>
        <Contact></Contact>
      </div>
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
    </>
  )
}

export default App
