import useSVGInject from "../../hooks/useSVGInject";
import logo from "../../assets/img/navbar/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  useSVGInject();
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <div
            className="collapse navbar-collapse div-lista-nav-01"
            id="navbarText"
          >
            <ul className="navbar-nav  d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#quemsomos">
                  Soluções
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#solucoes">
                  Quem sou
                </a>
              </li>
            </ul>
          </div>
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} className="svg-inject" alt="" />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse div-lista-nav-02"
            id="navbarText"
          >
            <ul className="navbar-nav  d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Atualizacoes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#quemsomos">
                  Blog
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="btn-white"
                  href="https://wa.me/5541988816941"
                  target="_blank"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
