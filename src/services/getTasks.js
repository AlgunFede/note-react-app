import axios from 'axios';


const link = process.env.REACT_APP_BASE_URL
const urlTasks = link + '/task'

const getTasks = async () => {
    const token = window.localStorage.loggedTaskAppUser;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const { data } = await axios.get(urlTasks, config)
}

export default getTasks