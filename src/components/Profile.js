import logo from '../img/default-avatar.png'
import axios from 'axios'
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

    const handleLogout = async () => {
        await axios.post('http://localhost:3000/users/logout/', {}, config).then((e) => {
            window.localStorage.removeItem('loggedTaskAppUser')
            history('/')
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className="profile-container">
            <div className="avatar-container">
                <img src={logo} alt="avatar"></img>
            </div>
            <div className="info-container">
                <h4>Description:</h4>
                <p>Set your description!</p>

            </div>
            <div className='options-btns'>
                <button className="logout-button" onClick={ handleLogout }>Log out</button>
            </div>
        </div>
    )

}

export default Profile