const Header = () => {
    return (
        <div className="navbar relative z-30 bg-base-100 shadow-2xl *:z-30">
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
                        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2"
                    >
                        <li>
                            <a href="/blog" className="text-2xl">
                                وبلاگ
                            </a>
                        </li>
                        <li>
                            <a href="store" className="text-2xl">
                                فروشگاه
                            </a>
                            <ul className="p-2 shadow-2xl *:text-xl">
                                <li>
                                    <a href="/frontend">Frontend</a>
                                </li>
                                <li>
                                    <a href="/backend">Backend</a>
                                </li>
                                <li>
                                    <a href="/fullstack">Fullstack</a>
                                </li>
                                <li>
                                    <a href="/mobile">برنامه نویسی موبایل</a>
                                </li>
                                <li>
                                    <a href="/desktop">برنامه نویسی دسکتاپ</a>
                                </li>
                                <li>
                                    <a href="/ai">هوش مصنوعی</a>
                                </li>
                                <li>
                                    <a href="/cyber">هک و امنیت</a>
                                </li>
                                <li>
                                    <a href="/ui">طراحی UI\UX</a>
                                </li>
                                <li>
                                    <a href="/blockchain">بلاک چین</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="about" className="text-2xl">
                                درباره ما
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-2xl">
                                تماس با ما
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-3xl">
                    CourseBazzar
                </a>
            </div>
            <div className="navbar-center hidden shadow-2xl lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/blog" className="text-2xl">
                            وبلاگ
                        </a>
                    </li>
                    <li>
                        <details>
                            <summary>
                                <a href="/store" className="text-2xl">
                                    فروشگاه
                                </a>
                            </summary>
                            <ul className="w-56 p-2 shadow-2xl *:text-xl">
                                <li>
                                    <a href="/frontend">Frontend</a>
                                </li>
                                <li>
                                    <a href="/backend">Backend</a>
                                </li>
                                <li>
                                    <a href="/fullstack">Fullstack</a>
                                </li>
                                <li>
                                    <a href="/mobile">برنامه نویسی موبایل</a>
                                </li>
                                <li>
                                    <a href="/desktop">برنامه نویسی دسکتاپ</a>
                                </li>
                                <li>
                                    <a href="/ai">هوش مصنوعی</a>
                                </li>
                                <li>
                                    <a href="/cyber">هک و امنیت</a>
                                </li>
                                <li>
                                    <a href="/ui">طراحی UI\UX</a>
                                </li>
                                <li>
                                    <a href="/blockchain">بلاک چین</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a href="/about" className="text-2xl">
                            درباره ما
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-2xl">
                            تماس با ما
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
