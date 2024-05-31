import "./navbar.scss";
import PAGE_KEYS from "../../constants.tsx";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  currentPath: string;
}

function Navbar({ currentPath }: NavbarProps) {
  // State to track if the background should be solid or transparent
  const [bgSolid, setBgSolid] = useState(false);

  // State to track if the navbar is collapsed or not
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to change navbar background based on scroll position
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setBgSolid(true);
    } else {
      setBgSolid(false);
    }
  };

  // scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div id="navbarComponent">
      <nav
        className={`navbar fixed-top navbar-expand-md navbar-scroll ${
          bgSolid ? "navbar-scrolled" : "navbar-unscrolled"
        }`}
      >
        <div className="container-fluid">
          <Link
            to={"/"}
            className="navbar-brand"
            onClick={() => {
              setIsCollapsed(true);
            }}
          >
            <span>Zeltlager ULF</span>
          </Link>
          <button
            className={`navbar-toggler ${isCollapsed ? "collapsed" : ""}`}
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isCollapsed ? "false" : "true"}
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  to={"/"}
                  id="nav-home"
                  className={`nav-link ${currentPath === "/" ? "active" : ""}`}
                  aria-current="page"
                  role="button"
                  onClick={() => setIsCollapsed(true)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/" + PAGE_KEYS.ABOUT}
                  id="nav-about"
                  className={`nav-link ${
                    currentPath === "/" + PAGE_KEYS.ABOUT ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => setIsCollapsed(true)}
                >
                  Über uns
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/" + PAGE_KEYS.GALLERY}
                  id="nav-gallery"
                  className={`nav-link ${
                    currentPath === "/" + PAGE_KEYS.GALLERY ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => setIsCollapsed(true)}
                >
                  Galerie
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/" + PAGE_KEYS.ENROL}
                  className={`nav-link ${
                    currentPath === "/" + PAGE_KEYS.ENROL ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => setIsCollapsed(true)}
                >
                  Anmeldung
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/" + PAGE_KEYS.CONTACT}
                  id="nav-contact"
                  className={`nav-link ${
                    currentPath === "/" + PAGE_KEYS.CONTACT ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => setIsCollapsed(true)}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3 me-lg-0">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/ulferzeltlager/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
