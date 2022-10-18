import axios from "axios";
import { useParams } from "react-router-dom";



const sentEdition = async (content, id) => {

    const urlTasks = 'https://noteit.fly.dev/task/' + id

    const token = window.localStorage.loggedTaskAppUser;

    const config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`
        }
    }

    const editRequest = await axios.patch(urlTasks, content, config)
}

export default { sentEdition }