import logo from '../img/default-avatar.png'
import axios from 'axios'
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    
    const link = process.env.REACT_APP_BASE_URL;
    const history = useNavigate()
    let isLoggedIn = false
    const token = window.localStorage.getItem('loggedTaskAppUser');
    
    const config = {
        headers: {
            'Authorization': `Bearer ${JSON.parse(token)}`,
        }
    }

    if(token) {
        isLoggedIn = true
    } else {
        history('/')
    }

    
    const { data: user, isPending, error } = useFetch(link + '/users/me')
<<<<<<< HEAD

=======
>>>>>>> 481059c9e22b56f6ed5086ee3db01c4070cb0bd9

    const handleLogout = async () => {
        await axios.post(link + '/users/logout/', {}, config).then((e) => {
            window.localStorage.removeItem('loggedTaskAppUser')
            history('/')
        }).catch(e => {
            throw new Error('Failed Log out!')
        })
    };

    const handleLogoutAllUsr = async () => {
        await axios.post(link + '/users/logoutAll', {}, config).then((e) => {
            window.localStorage.removeItem('loggedTaskAppUser')
            history('/')
        }).catch(e => {
            throw new Error('Failed Log out!')
        })
    }

    return (
<<<<<<< HEAD
        <div className="profile-container">
            <div className="name-container">
                {user && <h1>Hola {user.name}!</h1>}
            </div>
            <div className="avatar-container">
                <img src={logo} alt="avatar"></img>
            </div>
            <div className="info-container">
                <div>
                    <h4>Description:</h4>
                </div>
                <div>
                    <p>Set your description!</p>
                </div>
=======
        <div>
            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }
            { user && <div className="profile-container">
>>>>>>> 481059c9e22b56f6ed5086ee3db01c4070cb0bd9

                <div className="name-container">
                    <h1>Hola {user.name}!</h1>
                </div>
                <div className="avatar-container">
                    <img src={logo} alt="avatar"></img>
                </div>
                <div className="info-container">
                    <div>
                        <h4>Description:</h4>
                    </div>
                    <div>
                        <p>Set your description!</p>
                    </div>

                </div>
                <div className='options-btns'>
                    <div>
                        <button className="logout-button" onClick={ handleLogout }>Log out</button>
                    </div>
                    <div>
                        <button className="logout-button" onClick={ handleLogoutAllUsr }>Log out all users</button>
                    </div>
                </div>
            </div>}
        
        </div>
    )

}

export default Profile