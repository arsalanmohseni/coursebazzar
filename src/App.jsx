// Importing Components
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Pricing from "./Routes/Pricing";
import About from "./Routes/About";

// Main Component
const App = () => {
    // Routing
    let component = null;
    // Switching between routes
    switch (window.location.pathname) {
        case "/":
            component = <Home />;

            break;
        case "/pricing":
            component = <Pricing />;
            break;
        case "/about":
            component = <About />;
            break;
        default:
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
