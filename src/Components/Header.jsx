export default function Header() {
    return (
        <div className="navbar bg-base-100">
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
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a href="about">About</a>
                        </li>
                        <li>
                            <a href="contact">Contact us</a>
                        </li>
                        <li>
                            <a href="shop">Shop</a>
                            <ul className="p-2">
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
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
}
