import axios from 'axios';

const urlTasks = 'http://localhost:3000/task'

const getTasks = async (e) => {
    
    console.log(e)
    const { data } = await axios.get(urlTasks)
    console.log(data)
    return data
}

export default getTasks