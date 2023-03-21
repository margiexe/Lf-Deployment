// import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navp } from "./components/public/Navp";
import { Bannerp } from "./components/public/Bannerp";
import { Invest } from "./components/public/Invest";

const LayoutPublic = () => {
    return (
        <div className="App">
            <Navp />
            <Bannerp />
            <Invest />
            <Footer />
        </div>
    );
};

export default LayoutPublic;