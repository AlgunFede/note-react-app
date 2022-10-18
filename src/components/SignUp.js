import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'
const SignUp = () => {

    const link = process.env.DEFAULT_URL
    const urlLogin = link + '/users'

    const history = useNavigate()

    const handleSignUp = async (e) => {

        try {
            e.preventDefault()
            const username = e.target.username.value;
            const email = e.target.email.value;
            const password = e.target.password.value
            
            const userInfo = {
                name: username,
                email,
                password
            }
            const user = await axios.post(urlLogin, userInfo)
            window.localStorage.setItem(
                'loggedTaskAppUser', JSON.stringify(user.data.token)
                )
            if(user) {
                history('/home')
            } else {
                throw new Error()
            }
        } catch(e) {
            console.log('Error al crear cuenta', e)
        }
    }

    return (
        <div className="login-user">
                <h1>Sign Up</h1>
            <form onSubmit={handleSignUp} >
                <div className="txt_field">
                    <input 
                        type="text"
                        name= 'username'
                        required
                    />
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input 
                        type="text"
                        name= 'email'
                        required
                    />
                    <label>E-mail</label>
                </div>
                <div className="txt_field">
                    <input 
                        type="password"
                        name= 'password'
                        required
                    />
                    <label>Password</label>
                </div>
                <div className="txt_field">
                    <input 
                        type="password"
                        required
                    />
                    <label>Confirm password:</label>
                </div>
                <div>
                    <button className="login-btn">Sign Up</button> 
                </div>
            </form>
            <div className="signup-link">
                <Link to={`/`}>    
                    <p> Login! </p>
                </Link>
            </div>
        </div>
    )
}

export default SignUp;