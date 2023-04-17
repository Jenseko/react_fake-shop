import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <section className="nav_section">
            <div className="headline">
                <Link to='/'>
                    <h1>Super<span>Mazon</span></h1>
                </Link>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/services'>Services</Link>
            </nav>
        </section>
    );
}

export default Navbar;