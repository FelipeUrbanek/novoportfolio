import profilephoto from "../../assets/img/profile/profile.png";
import gradient from "../../assets/img/elementos/gradienthigh.svg";

const Profile = () => {
  return (
    <section id="profile">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 container-profile"
            style={{ position: "relative" }}
          >
            <img src={profilephoto} className="profile-img mb-2" alt="" />
            <h6>Pronto para transformar sua ideia em realidade?</h6>
            <h2>
              Vamos trabalhar juntos para criar algo que faça sua empresa se
              destacar no mercado?
            </h2>
            <h3>contato@felipeurbanek.com</h3>
            <img src={gradient} className="gradient-profile" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
