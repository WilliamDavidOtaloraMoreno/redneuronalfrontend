import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/image/1x/MovieLogo.png";
import styles from "./Header.module.css";

export const Header = () => {

  
  return (
    <>
      <header className={`${styles.bg_header} d-flex justify-content-center`}>
        <Navbar id="header" collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav navbarCollapse" />
          <Navbar.Collapse
            id="responsive-navbar-nav navbarcollapse"
            aria-hidden="true"
          >
            <Nav className={`${styles.containner} nav_container`}>
              <ul className="nav">
                
                <li className={`${styles.nav_link} ${styles.a}`}>
                  <a
                    className={`nav-link ${styles.a_link}`}
                    href="/soft-develoment"
                  >
                    Recomendaciones
                  </a>
                </li>

                <a
                  href="/"
                  className={`${styles.nav_link_a} ${styles.navbar_responsive}`}
                >
                  <img
                    src={logo}
                    width={200}
                    height={55}
                    alt="MovieLogo.png"
                  />
                </a>

                <li className={`${styles.nav_link} ${styles.a}`}>
                  <a
                    className={`nav-link ${styles.a_link}`}
                    href="/grafic-desing"
                  >
                    Peliculas
                  </a>
                </li>
                
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};
