import axios from 'axios';

const urlLogin = 'https://noteit.fly.dev/users/login'
 
const login = async credentials => {
    const { data } = await axios.post(urlLogin, credentials)
    return data
}

export default { login }