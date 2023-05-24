import "./TopHeading.scss";
const TopHeading = (props) => {
  return (
    <div className="TopHeading">
      <h1>{props.title}</h1>
    </div>
  );
};

export default TopHeading;
