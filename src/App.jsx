// Importing Components
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import About from "./Routes/About";
import Contact from "./Routes/Contact";

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
