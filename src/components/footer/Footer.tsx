import { Link } from "react-router-dom";
import logo from "../../assets/img/navbar/logo.svg";
import useSVGInject from "../../hooks/useSVGInject";

const Footer = () => {
  useSVGInject();
  return (
    <section id="footer">
      <div className="container container-principal-footer">
        <div className="row">
          <div className="col-lg-4 container-textos">
            <img src={logo} alt="" srcSet="" />
            <span>
              Se você busca um site que realmente reflita sua marca e ofereça
              uma experiência única aos seus visitantes, vamos conversar. Meu
              foco é criar algo que seja totalmente seu, diferente de qualquer
              outro.
            </span>
            <div className="redesociais">
              <a href="https://www.linkedin.com/in/felipe-urbanek-0a0b0b1b1/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="">
                <i className="fab fa-github"></i>
              </a>
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <ul>
              <li className="item-title">Projetos</li>
              <li>
                <a href="">Site 01 - Example</a>
              </li>
              <li>
                <a href="">Site 02 - Example</a>
              </li>
              <li>
                <a href="">Site 03 - Example</a>
              </li>
              <li>
                <a href="">Site 04 - Example</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul>
              <li className="item-title">Paginas</li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Postagens</a>
              </li>
              <li>
                <Link to="/proposta-comercial">Proposta Comercial</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul>
              <li className="item-title">Contato</li>
              <li>
                <a href="">(41) 9 9999-9999</a>
              </li>
              <li>
                <a href="">contato@felipeurbanek.com</a>
              </li>
              <li>
                <a href="">Formulario de Contato</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul>
              <li className="item-title">Lorem Ipsum</li>
              <li>
                <a href="">Lorem Ipsum</a>
              </li>
              <li>
                <a href="">Lorem Ipsum</a>
              </li>
              <li>
                <a href="">Lorem Ipsum</a>
              </li>
              <li>
                <a href="">Lorem Ipsum</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container linha-final">
        <div className="row">
          <div className="col-lg-12">
            <p>Desenvolvido com muito ♥ por Felipe Urbanek</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
