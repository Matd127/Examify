import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
      <div className="container py-2 ">
        <Link to="/" className="navbar-brand">
          Examify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isActive && "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/" className="nav-link px-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-3">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-3">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/auth"
                className="btn btn-primary text-light px-5 mx-lg-5"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
