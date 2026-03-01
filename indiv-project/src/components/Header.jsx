import Nav from "./Nav";

function Header({ darkMode, setDarkMode }) {
    return (
        <header className="header">
            <h1>Kiki Mitrakis</h1>
            <Nav />
            <button className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    );
}
export default Header;