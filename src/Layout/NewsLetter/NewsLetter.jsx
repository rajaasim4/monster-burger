import { AiOutlineArrowRight } from "react-icons/all";
import "./NewsLetter.scss";
const NewsLetter = () => {
  return (
    <section className="NewsLetter">
      <div className="NewsLetter-main">
        <h2>Get the Best Offers</h2>

        <div className="NewsLetter-input">
          <input type="text" placeholder="Email Address" />
          <span>
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
