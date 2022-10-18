import axios from 'axios';

const link = process.env.REACT_APP_BASE_URL
const urlLogin = link + '/users/login'
 
const login = async credentials => {
    const { data } = await axios.post(urlLogin, credentials)
    return data
}

export default { login }