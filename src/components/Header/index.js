import {Link, withRouter} from 'react-router-dom'

import Cookie from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/duajungih/image/upload/v1731829794/Logo_qbffkn.jpg"
            alt="website logo"
          />
        </Link>

        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>

          <Link to="/cart" className="nav-link">
            <li>Cart</li>
          </Link>
        </ul>
        <img
          src="https://res.cloudinary.com/duajungih/image/upload/v1734591700/logout_lzuzyc.png"
          alt="logout icon"
          className="logout-icon"
        />
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
          aria-label="Logout"
        >
          Logout
        </button>

        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://res.cloudinary.com/duajungih/image/upload/v1734591700/logout_lzuzyc.png"
            alt="logout icon"
            className="logout-icon"
          />
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
