import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/all";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Quote from "../../assets/Images/Quote.svg";
import "./Testimonial.scss";
const Testimonial = () => {
  return (
    <section className="Testimonial">
      <div className="Testimonial-main">
        <h2>Testimonial</h2>
        <h3>Dont believe us check clients word</h3>
        <div className="Testimonial-Slider">
          <Swiper
            // navigation={true}
            allowSlideNext={true}
            allowSlidePrev={true}
            loop={true}
            autoplay={true}
            effect="Slide"
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper main-Slider"
          >
            <SwiperSlide>
              <TestimonialCoponent title="Maria J.Biggs" />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCoponent title="Samoul Doe" />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCoponent title="Tomas Souza" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="Slider_btn">
          <button className="swiper-prev">
            <MdArrowBackIosNew />
          </button>
          <button className="swiper-next">
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </section>
  );
};
const TestimonialCoponent = (props) => {
  return (
    <div className="Testimonial-Slider-main">
      <img src={Quote} alt="" />
      <h4>{props.title}</h4>
      <p>
        Arcu cursus vitae congue mauris rhoncus aenean vel Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl
        nisi. Morbi tristique senectus et netus. Elit scelerisque. In egestas
        erat imperdiet sed euismod nisi porta lorem.
      </p>
    </div>
  );
};

export default Testimonial;
