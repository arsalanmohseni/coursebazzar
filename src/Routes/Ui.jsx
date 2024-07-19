import UiList from "../Components/Lists/UiList";

const Ui = () => {
    return (
        <div>
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

export default Ui;
