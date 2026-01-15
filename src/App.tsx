import {useState} from 'react'
import './App.css'
import Topheadlines from './components/Topheadlines'
import Everything from './components/Everything'
import Navbar from './components/Navbar'
import Filter from './components/Filter'

function App() {
  const[query, setQuery] = useState<string>('bitcoin')
  const[sortby, setSortBy] = useState<string>('popularity')
  

  return (
    <>
    <Navbar onSearch={setQuery}/>
    <Filter onSortChange={setSortBy}/>
    <Everything query={query} sortby={sortby}/>
    <Topheadlines/>
    
    </>
  )
}

export default App
