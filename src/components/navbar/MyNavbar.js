import { Link } from 'react-router-dom';
import './MyNavbar.css';

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 px-3 w-100">
      <div className="container-fluid">
        <Link className="navbar-brand px-3" to="/homepage">Usama</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-link active" aria-current="page" to="/homepage">Home</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active" aria-current="page" to="/posts">Posts</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default MyNavbar;