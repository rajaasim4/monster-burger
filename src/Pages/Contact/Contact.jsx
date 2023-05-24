import TopHeading from "../../Components/TopHeading/TopHeading";
import "./Contact.scss";
const Contact = () => {
  return (
    <>
      <section className="Contact">
        <TopHeading title="Contact Us" />
        <div className="Contact-main">
          <div className="Contact-form">
            <form
              action="
                "
            >
              <div className="form-input">
                <label htmlFor="">Name</label>
                <br />
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div className="form-input">
                <label htmlFor="">Email</label>
                <br />
                <input type="text" placeholder="Enter your Email" />
              </div>
              <div className="form-input">
                <label htmlFor="">Address</label>
                <br />
                <input type="text" placeholder="Enter your Address" />
              </div>
              <div className="form-input">
                <label htmlFor="">Message</label>
                <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="Contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4121.691988352701!2d-104.99785659028731!3d39.75802549983567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1samerica%20resturants%20usa!5e0!3m2!1sen!2s!4v1684164890288!5m2!1sen!2s"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
