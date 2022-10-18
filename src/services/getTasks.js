import axios from 'axios';

const urlTasks = 'https://noteit.fly.dev/task'

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