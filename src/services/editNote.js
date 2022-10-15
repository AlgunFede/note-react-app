import axios from "axios";
import { useParams } from "react-router-dom";



const sentEdition = async (content, id) => {

    const urlTasks = 'http://localhost:3000/task/' + id

    const token = window.localStorage.loggedTaskAppUser;

    const config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`
        }
    }

    const editRequest = await axios.patch(urlTasks, content, config)
}

export default { sentEdition }