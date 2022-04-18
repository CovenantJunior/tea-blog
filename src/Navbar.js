const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
            <a href="/home" style={{
                color: "#f1356d",
                backgroundColor: "#fff",
                borderRadius: "10px"
            }} className="href">Home</a>
            <a href="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "10px"
            }} className="href">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;