import axios from 'axios';

const urlTasks = 'http://localhost:3000/task'

const getTasks = async () => {
    const token = window.localStorage.loggedTaskAppUser;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const { data } = await axios.get(urlTasks, config)
    console.log(data)
}

export default getTasks