import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginService from './services/login'

// post /users/login to login user

const LoginPage = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();


    const handleLogin =  async (e) => {
        
        try {
            e.preventDefault()
            const user = await loginService.login({
                email: e.target.username.value,
                password: e.target.password.value
            })
            setUser(user)
            setPassword('')
            setUsername('')
            history('/home');
            
        } catch(e) {
            console.log(e)
        }

    }

    return (
        <div className="login-user">
            <h1>Login</h1>
          <form onSubmit={handleLogin}>
           <div className="txt_field">
                <input 
                    type="text"
                    value={username}
                    name= 'username'
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
                    onChange={(target) => { setPassword(target.value)}} 
                />
                <span></span>
                <label>Password</label>
            </div>
            <div>
                <button className="login-btn">Log In</button> 
            </div>
          </form>
        </div>
    )

}

export default LoginPage;