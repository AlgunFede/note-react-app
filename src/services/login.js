import axios from 'axios';

const urlLogin = 'http://localhost:3000/users/login'
 
const login = async credentials => {
    const { data } = await axios.post(urlLogin, credentials)
    return data
}

export default { login }