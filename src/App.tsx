import {useState} from 'react'
import {Route, Routes,useLocation} from 'react-router-dom'
import './App.css'
import Topheadlines from './pages/Topheadlines'
import Everything from './pages/Everything'
import Navbar from './components/Navbar'
import Sortby from './components/Sortby'
import Footer from './components/Footer'
import Filter from './components/Filter'

function App() {
  const[query, setQuery] = useState<string>('bitcoin')
  const[sortby, setSortBy] = useState<string>('popularity')
  const[filterby, setFilterBy] = useState<string>('general');

  const location = useLocation();

  return (
    <>
    <Navbar onSearch={setQuery}/>
    
    { /*Conditional rendering of filter component only for the everything page*/ }
    {location.pathname==="/everything"?<Sortby onSortChange={setSortBy}/>:null}

    {location.pathname==="/"?<Filter onFilterChange={setFilterBy}/>:null}

    <Routes>
      <Route path="/" element={<Topheadlines filterby={filterby}/>}/>
      <Route path='/everything' element={<Everything query={query} sortby={sortby}/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
