// Importing Components
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Store from "./Routes/Store";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import NotFound from "./Components/NotFound";
import Frontend from "./Routes/Frontend";
import Backend from "./Routes/Backend";
import Blockchain from "./Routes/Blockchain";
import Cyber from "./Routes/Cyber";
import Ai from "./Routes/Ai";
import Mobile from "./Routes/Mobile";
import Ui from "./Routes/Ui";
import Desktop from "./Routes/Desktop";
import Blog from "./Routes/Blog";
import Footer from "./Components/Footer";

// Main Component
const App = () => {
    // Routing
    let component = null;
    // Switching between routes
    switch (window.location.pathname) {
        case "/":
            component = <Home />;

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
        case "/mobile":
            component = <Mobile />;
            break;
        case "/blog":
            component = <Blog />;
            break;
        case "/desktop":
            component = <Desktop />;
            break;
        case "/ui":
            component = <Ui />;
            break;
        case "/store":
            component = <Store />;
            break;
        default:
            component = <NotFound />;
            break;
    }

    return (
        <div>
            <Header />
            {component}
            <Footer />
        </div>
    );
};

export default App;
