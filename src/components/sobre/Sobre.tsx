import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import useSVGInject from "../../hooks/useSVGInject";
import imgplace from "../../assets/img/sobremim/img.png";

const Sobre = () => {
  useSVGInject();

  const options = {
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        pauseOnHover: true,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section id="sobre-mim">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0 carrossel-sobre">
            <OwlCarousel className="owl-theme " {...options}>
              <div className="item">
                <img src={imgplace} alt="" />
              </div>
              <div className="item">
                <img src={imgplace} alt="" />
              </div>
              <div className="item">
                <img src={imgplace} alt="" />
              </div>
              <div className="item">
                <img src={imgplace} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="container container-texto-sobre">
        <div className="row">
          <div className="col-lg-12">
            <h6>Felipe Urbanek</h6>
            <h3>Desenvolvedor Front-end</h3>
            <span>
              Transformo ideias em realidade digital com designs modernos e
              código robusto. Com uma sólida experiência em São José dos Pinhais
              - PR / Curitiba - PR, ajudo empresas a alcançar novos patamares no
              mundo digital, criando presenças online que não apenas se
              destacam, mas conectam verdadeiramente com seu público. Meu
              compromisso é entregar soluções que geram resultados tangíveis e
              impulsionam o crescimento do seu negócio.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
