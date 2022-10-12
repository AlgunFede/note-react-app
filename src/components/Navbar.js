import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {

    const history = useNavigate()

    const token = window.localStorage.getItem('loggedTaskAppUser');
    const config = {
        headers: {
            'Authorization': `Bearer ${JSON.parse(token)}`,
        },
    }

    const handleLogout = async () => {
        await axios.post('http://localhost:3000/users/logout/', {}, config).then((e) => {
            window.localStorage.removeItem('loggedTaskAppUser')
            console.log('EL TOKEN ', window.localStorage.getItem('loggedTaskAppUser'))
            history('/')
        }).catch(e => {
            console.log('Aca se rompio pa, te va el error ahi ', e)
        })
    }

    return (    
        <nav className="navbar">
            <h1>NoteIt!</h1>
            <div className="links">
                <button className="logout-button" onClick={ handleLogout }>Log out</button>
                <Link to="/">Home</Link>
                <Link to="/create" className="btn-NN" >+</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;