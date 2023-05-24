import TopHeading from "../../Components/TopHeading/TopHeading";
import chefImg3 from "../../assets/Images/Kenneth_D_Cox.jpg";
import chefImg1 from "../../assets/Images/Melissa_J_Mauldin.jpg";
import chefImg2 from "../../assets/Images/Michael_M_Melton.jpg";
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <section className="AboutUs">
      <TopHeading title={"About Us"} />
      <div className="AboutUs-heading">
        <h2>Monster Team</h2>
      </div>
      <div className="AboutUs-main">
        <ChefDetails img={chefImg1} chefName="Melissa J. Mauldin" />
        <ChefDetails
          img={chefImg2}
          direction={"row-reverse"}
          chefName="Michael M. Melton"
        />
        <ChefDetails img={chefImg3} chefName="Kenneth D. Cox" />
      </div>
    </section>
  );
};

const ChefDetails = (props) => {
  return (
    <div className="Chef-Details" style={{ flexDirection: props.direction }}>
      <div className="Chef-Details-left-section">
        <h4>Mellisa Melissa J. Mauldin</h4>
        <h6>Mater Chef</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis.
        </p>
      </div>
      <div className="Chef-Details-right-section">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
