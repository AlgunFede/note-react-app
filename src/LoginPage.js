import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginService from './services/login'
import login from "./services/login";

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
                email: username,
                password
            })
            console.log(user)
            setUser(user)
            setPassword('')
            setUsername('')
            
        } catch(e) {
            console.log(e)
        }

    }

    return (
        <div className="login-user">
          <form onSubmit={handleLogin}>
           <div>
                <input 
                    type="text"
                    value={username}
                    name= 'username'
                    placeholder="Username"
                    onChange={(target) => { setUsername(target.value)}} 
                    />
            </div>
            <div>
            <input 
                type="password"
                value={password}
                name= 'password'
                placeholder="Password"
                onChange={(target) => { setPassword(target.value)}} 
                />
            </div>
            <div>
                <button>Log In</button> 
            </div>
          </form>
        </div>
    )

}

export default LoginPage;