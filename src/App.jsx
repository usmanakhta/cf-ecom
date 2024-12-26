import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Nav from './Components/HeaderNav/Nav'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Navbar/>
<Nav/>
<Home/>
     
    </>
  )
}

export default App
