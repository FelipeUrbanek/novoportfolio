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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a quo
              similique quas quasi commodi voluptatem, nulla eveniet nihil id
              quia accusantium quidem eos neque, nemo illum quaerat aperiam
              enim!
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
                <a href="">Proposta Comercial</a>
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
