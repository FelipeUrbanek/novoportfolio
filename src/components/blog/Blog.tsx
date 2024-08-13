import projetosplace from "../../assets/img/blog/projetos.png";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6>Ultimas artigos</h6>
            <h3>Fique por dentro das tendências e prepare-se para o futuro.</h3>
          </div>
          <div className="col-lg-4">
            <div className="box-blog">
              <a href="">
                <img
                  src={projetosplace}
                  className="img-fluid"
                  alt=""
                  srcSet=""
                />
                <span>
                  Descubra como as tecnologias emergentes podem colocar seu
                  negócio à frente da concorrência.
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box-blog">
              <a href="">
                <img
                  src={projetosplace}
                  className="img-fluid"
                  alt=""
                  srcSet=""
                />
                <span>
                  Aprenda as estratégias mais recentes para maximizar o impacto
                  digital da sua empresa.
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box-blog">
              <a href="">
                <img
                  src={projetosplace}
                  className="img-fluid"
                  alt=""
                  srcSet=""
                />
                <span>
                  Insights práticos sobre como otimizar sua presença online e
                  atrair mais clientes.
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
