import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                CourseBazaar
            </Link>
            <ul>
                <li>
                    <Link to="/contact" className="contact">
                        Contact
                    </Link>
                    <Link to="/about" className="about">
                        About
                    </Link>
                </li>
            </ul>
        </header>
    );
}
