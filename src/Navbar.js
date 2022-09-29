import { Link } from "react-router-dom";


const Navbar = () => {
    return (    
        <nav className="navbar">
            <h1>Notes</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" class="btn-NN" >+</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;