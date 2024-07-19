import FrontendList from "../Components/Lists/FrontendList";
import BackendList from "../Components/Lists/BackendList";
import DesktopList from "../Components/Lists/DesktopList";
import CyberList from "../Components/Lists/CyberList";
import BlockchainList from "../Components/Lists/BlockchainList";
import AiList from "../Components/Lists/AiList";
import MobileList from "../Components/Lists/MobileList";
import UiList from "../Components/Lists/UiList";

const Store = () => {
    return (
        <div>
            <h1 className="my-7 text-center text-4xl font-bold">Store</h1>
            <hr />
            <h2 className="my-7 text-center text-2xl font-bold">Frontend</h2>
            <hr />
            <FrontendList custom="mt-9" />
            <h2 className="my-7 text-center text-2xl font-bold">Backend</h2>
            <hr />
            <BackendList />
            <h2 className="my-7 text-center text-2xl font-bold">Desktop</h2>
            <hr />
            <DesktopList />
            <h2 className="my-7 text-center text-2xl font-bold">Cyber</h2>
            <hr />
            <CyberList />
            <h2 className="my-7 text-center text-2xl font-bold">Blockchain</h2>
            <hr />
            <BlockchainList />
            <h2 className="my-7 text-center text-2xl font-bold">AI</h2>
            <hr />
            <AiList />
            <h2 className="my-7 text-center text-2xl font-bold">Mobile</h2>
            <hr />
            <MobileList />
            <h2 className="my-7 text-center text-2xl font-bold">UI/UX</h2>
            <hr />
            <UiList />
            <footer className="my-7 text-center">
                <h1>
                    &copy; Developed by{" "}
                    <a href="https://github.com/pythonmohseni" className="text-blue-500">
                        Arsalan Mohseni
                    </a>
                </h1>
                <h1>
                    Repository:{" "}
                    <a href="https://github.com/pythonmohseni/coursebazzar" className="text-blue-500">
                        Coursebazzar
                    </a>
                </h1>
            </footer>
        </div>
    );
};

export default Store;
