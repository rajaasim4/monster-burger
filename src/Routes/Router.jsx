// import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Home/Home";
// const Home = lazy(() => import("../Home/Home"));
// const Menu = lazy(() => import("../Pages/Menu/Menu"));
// const AboutUs = lazy(() => import("../Pages/AboutUs/AboutUs"));
import { ParallaxProvider } from "react-scroll-parallax";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Cart from "../Pages/Cart/Cart";
import Contact from "../Pages/Contact/Contact";
import Menu from "../Pages/Menu/Menu";
const Router = () => {
  return (
    <>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<NavBar />}>
              <Route index path="/" element={<Home />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Cart" element={<Cart />} />
            </Route>
            {/* <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="AboutUs" element={<AboutUs />} />
          </Route> */}
          </Routes>
        </BrowserRouter>
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default Router;
