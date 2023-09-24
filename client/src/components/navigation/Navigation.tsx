import { FC } from "react";

const Navigation: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container py-2 w-75">
        <a className="navbar-brand" href="#home">
          Examify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-3" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#home">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#home">
                About us
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary px-5 mx-5">Sign in</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
