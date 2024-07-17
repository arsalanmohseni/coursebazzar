// Importing Components
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import NotFound from "./Components/404";
import Frontend from "./Routes/Frontend";
import Backend from "./Routes/Backend";
import Blockchain from "./Routes/Blockchain";
import Cyber from "./Routes/Cyber";
import Ai from "./Routes/Ai";

// Main Component
const App = () => {
    // Routing
    let component = null;
    // Switching between routes
    switch (window.location.pathname) {
        case "/":
            component = <Home />;

            break;
        case "/shop":
            component = <Shop />;
            break;
        case "/about":
            component = <About />;
            break;
        case "/contact":
            component = <Contact />;
            break;
        case "/frontend":
            component = <Frontend />;
            break;
        case "/backend":
            component = <Backend />;
            break;
        case "/blockchain":
            component = <Blockchain />;
            break;
        case "/cyber":
            component = <Cyber />;
            break;
        case "/ai":
            component = <Ai />;
            break;
        default:
            component = <NotFound />;
            break;
    }

    return (
        <div>
            <Header />
            {component}
        </div>
    );
};

export default App;
