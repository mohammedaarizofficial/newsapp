import { useState} from "react"
import {NavLink} from "react-router-dom"

type Navbarprops = {
  onSearch: (value: string) => void
}

export default function Navbar({ onSearch}: Navbarprops) {
  const [searchText, setSearchText] = useState<string>("")
    

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchText.trim()) {
      onSearch(searchText)
    }
  }


  return (
    <header className="p-3 mb-3 border-bottom navbar">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
              <use href="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

            <li>
              <NavLink to="/" className="nav-link px-2">Top Headlines</NavLink>
            </li>

            <li>
              <NavLink to="/everything" className="nav-link px-2">Everything</NavLink>
            </li>
          </ul>

          {/* 🔍 SEARCH (UNCHANGED LOGIC) */}
          <form onSubmit={handleSubmit} className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>

          {/* 👤 PROFILE DROPDOWN */}
          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>

            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  )
}
