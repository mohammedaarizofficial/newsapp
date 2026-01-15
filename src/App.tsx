import {useState} from 'react'
import './App.css'
// import Topheading from './components/Topheading'
import Everything from './components/Everything'
import Navbar from './components/Navbar'

function App() {
  const[query, setQuery] = useState<string>('bitcoin')
  

  return (
    <>
    <Navbar onSearch={setQuery}/>
    {/* <Topheading/> */}
    <Everything query={query}/>
    </>
  )
}

export default App
