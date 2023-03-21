// import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navs } from './components/Investor/Navs';
import StartupHomeList from './StartupHomeList';
import { Domain } from './components/Investor/Domain';

const LayoutStartup = () => {
    return (
        <div className="App">
            <StartupHomeList />
            {/* <Domain /> */}
            <Footer />
        </div>
    );
};

export default LayoutStartup;