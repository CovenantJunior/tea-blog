import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
            <Link to="/home" style={{
                color: "#f1356d",
                backgroundColor: "#fff",
                borderRadius: "10px"
            }} className="href">Home</Link>
            <Link to="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "10px"
            }} className="href">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;