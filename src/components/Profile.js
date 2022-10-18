import logo from '../img/default-avatar.png'
import axios from 'axios'
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    
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

    const { data: user, isPending, error } = useFetch('https://noteit.fly.dev/users/me')
    console.log(user.name)
    const handleLogout = async () => {
        
        await axios.post('https://noteit.fly.dev/users/logout/', {}, config).then((e) => {
            window.localStorage.removeItem('loggedTaskAppUser')
            history('/')
        }).catch(e => {
            console.log(e)
        })
    };

    const handleLogoutAllUsr = async () => {
        await axios.post('https://noteit.fly.dev/users/logoutAll', {}, config).then((e) => {
            window.localStorage.removeItem('loggedTaskAppUser')
            history('/')
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className="profile-container">
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
        
        </div>
    )

}

export default Profile