import profilephoto from "../../assets/img/profile/profile.png";
import gradient from "../../assets/img/elementos/gradienthigh.svg";

const Profile = () => {
  return (
    <section id="profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 container-profile">
            <img src={profilephoto} className="profile-img" alt="" srcSet="" />
            <h6>Vamos nos conectar?</h6>
            <h2>Eu adoraria trabalhar com você!</h2>
            <h3>contato@felipeurbanek.com</h3>
            <img src={gradient} className="gradient-profile" alt="" srcSet="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
