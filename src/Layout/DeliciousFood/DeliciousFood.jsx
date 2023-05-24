import { Parallax } from "react-scroll-parallax";
import "./DeliciousFood.scss";
const DeliciousFood = () => {
  return (
    <section className="DeliciousFood">
      <div className="DeliciousFood-main">
        <div className="DeliciousFood-left">
          <h2>Delicious Food</h2>
          <h3>The High Quality foodstuff</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin.
          </p>
          <button>Read More</button>
        </div>
        <div className="DeliciousFood-right">
          <Parallax
            translateY={[10]}
            speed={10}
            className="Hero-float-img Hero-float-img1"
          >
            <h2>100%</h2>
            <h3>Organic Food Stuff</h3>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default DeliciousFood;
