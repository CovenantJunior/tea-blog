import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Error</h2>
            <div className="navbar">Sorry, page not found.
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "10px"
                }} className="href">Back to Homepage</Link>
            </div>
        </div>
     );
}
 
export default NotFound;