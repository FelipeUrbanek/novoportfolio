import projetosplace from "../../assets/img/blog/projetos.png";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6>Ultimas artigos</h6>
            <h3>Blog</h3>
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
                  Como o futuro da programação e o SPA vem ajudando os devs
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
                  Como o futuro da programação e o SPA vem ajudando os devs
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
                  Como o futuro da programação e o SPA vem ajudando os devs
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
