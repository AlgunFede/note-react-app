import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {

    const history = useNavigate()
    let isLoggedIn = false
    const token = window.localStorage.getItem('loggedTaskAppUser');
    const config = {
        headers: {
            'Authorization': `Bearer ${JSON.parse(token)}`,
        },
    }

    if(token) {
        isLoggedIn = true
    }

    const handleLogout = async () => {
        await axios.post('https://noteit.fly.dev/users/logout/', {}, config).then((e) => {
            window.localStorage.removeItem('loggedTaskAppUser')
            history('/')
        }).catch(e => {
            console.log(e)
        })
    }
    
    return (    
        <nav className="navbar">
            <h1>NoteIt! <span>(beta)</span> </h1>
            <div className="links">
                { isLoggedIn && <Link to="/profile">Profile</Link> }
                { isLoggedIn && <Link to="/home">Home</Link> }
                { isLoggedIn && <Link to="/create" className="btn-NN" >+</Link>}
            </div>
        </nav>
      );
}
 
export default Navbar;