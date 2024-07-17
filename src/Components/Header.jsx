export default function Header() {
    return (
        <div className="navbar rounded-lg bg-base-100 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                </div>
                <a className="btn btn-ghost text-3xl" href="/">
                    Coursebazzar
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="about" className="text-2xl">
                            درباره ما
                        </a>
                    </li>
                    <li>
                        <a href="contact" className="text-2xl">
                            تماس با ما
                        </a>
                    </li>
                    <li>
                        <details>
                            <summary className="text-2xl">فروشگاه</summary>
                            <ul className="p-2 *:text-xl">
                                <li>
                                    <a href="frontend">Front End</a>
                                </li>
                                <li>
                                    <a href="backend">Back End</a>
                                </li>
                                <li>
                                    <a href="fullstack">Full Stack</a>
                                </li>
                                <li>
                                    <a href="mobile">Mobile</a>
                                </li>
                                <li>
                                    <a href="webdev">Web Development</a>
                                </li>
                                <li>
                                    <a href="ai">AI</a>
                                </li>
                                <li>
                                    <a href="blockchain">Blockchain</a>
                                </li>
                                <li>
                                    <a href="cybersecurity">Cyber Security</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}
