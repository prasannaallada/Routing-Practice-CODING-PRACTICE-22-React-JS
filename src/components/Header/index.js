// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-items">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="nav-logo"
      />
      <h1 className="nav-title">Wave</h1>
    </div>

    <ul className="menu-container">
      <li className="menu-item">
        <Link to="/">Home</Link>
      </li>
      <li className="menu-item">
        <Link to="/about">About</Link>
      </li>
      <li className="menu-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
