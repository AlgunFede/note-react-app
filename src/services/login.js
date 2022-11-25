import axios from 'axios';

<<<<<<< HEAD
const link = process.env.DEFAULT_URL || 'http://localhost:3000';
=======
const link = process.env.REACT_APP_BASE_URL
>>>>>>> 481059c9e22b56f6ed5086ee3db01c4070cb0bd9
const urlLogin = link + '/users/login'
 
const login = async credentials => {
    const { data } = await axios.post(urlLogin, credentials)
    return data
}

export default { login }