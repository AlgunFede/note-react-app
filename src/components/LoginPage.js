import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loginService from '../services/login'
import { Link } from "react-router-dom";


// post /users/login to login user

const LoginPage = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();
    const jwtToken = window.localStorage.getItem('loggedTaskAppUser');

    useEffect(() => {   
        if(jwtToken) {
            history('/home')
        }
    })
    const handleLogin =  async (e) => {
        try {
            e.preventDefault()
            const user = await loginService.login({
                email: e.target.username.value,
                password: e.target.password.value
            })
            setUser(user)
            window.localStorage.setItem(
                'loggedTaskAppUser', JSON.stringify(user.token)
            )
            setPassword('')
            setUsername('')
            history('/home');
            
        } catch(e) {
            console.log(e)
        }

    }

    return (
        <div className="login-user">
            <h1>Log In</h1>
          <form onSubmit={handleLogin}>
           <div className="txt_field">
                <input 
                    type="text"
                    value={username}
                    name= 'username'
                    required
                    onChange={(target) => { setUsername(target.value)}} 
                />
                <span></span>
                <label>E-mail</label>
            </div>
            <div className="txt_field">
                <input 
                    type="password"
                    value={password}
                    name= 'password'
                    required
                    onChange={(target) => { setPassword(target.value)}} 
                />
                <span></span>
                <label>Password</label>
            </div>
            <div>
                <button className="login-btn">Log In</button> 
            </div>
            <div className="signup-link">
                <Link to={`/signup`}>    
                    <p> Create an account! </p>
                </Link>
            </div>
          </form>
        </div>
    )

}

export default LoginPage;