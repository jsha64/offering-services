// import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav"
import Menu from './components/Menu'
import Services from './components/Services'
import TechStack from './components//TechStack'
import Plans from './components/Plans'
import Finish from './components/Finish'
import Footer from './components/Footer'
// import BoldButton from './components/BoldButton'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Menu />
      <Services />
      <TechStack />
      <Plans />
      <Finish />
      <Footer />
      {/* <BoldButton /> */}
    </>
  )
}

export default App
