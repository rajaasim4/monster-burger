import { ToastContainer } from "react-toastify";
import MenuCard from "../../Components/MenuCard/MenuCard";
import TopHeading from "../../Components/TopHeading/TopHeading";
import MenuData from "../../Data/MenuData";
import "./Menu.scss";

import "react-toastify/dist/ReactToastify.css";
const Menu = () => {
  return (
    <div className="Menu">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        limit={2}
      />
      <TopHeading title={"Monster Menu"} />

      <div className="Menu-main">
        {MenuData.map((item) => {
          return <MenuCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
