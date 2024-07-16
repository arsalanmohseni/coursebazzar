export default function Header() {
    return (
        <header className="header">
            <a href="/" className="logo">
                CourseBazaar
            </a>
            <ul>
                <li>
                    <a href="/contact">Contact</a>
                    <a href="/about">About</a>
                </li>
            </ul>
        </header>
    );
}
