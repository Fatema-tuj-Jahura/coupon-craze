import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import StaticSlider from "../StaticSlider/StaticSlider"
const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <StaticSlider></StaticSlider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;