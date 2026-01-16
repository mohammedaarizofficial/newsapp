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
    <div className="app">
  <Navbar onSearch={setQuery} />

  <main className="container news-layout">
    {location.pathname === "/everything"?<Sortby onSortChange={setSortBy}/> : <Filter onFilterChange={setFilterBy}/>}

    <Routes>
      <Route path="/" element={<Topheadlines filterby={filterby}/>} />
      <Route
        path="/everything"
        element={<Everything query={query} sortby={sortby} />}
      />
    </Routes>
  </main>

  <Footer />
</div>

  )
}

export default App
