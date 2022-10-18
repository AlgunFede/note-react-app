import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Create = () => {

    const { id } = useParams()
    const [status, setStatus] = useState('Not Started'); 
    const [description, setDescription] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { description, status };
        setIsPending(true);
        
        const token = window.localStorage.getItem('loggedTaskAppUser');
        const abortCont = new AbortController();

        const config = {
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`,
            },
        }

        const data = async () => {

            await axios.post('https://noteit.fly.dev/task/', task, config).then((res) => {
                setIsPending(false);
                history('/home')
            }).catch((e) => {
                console.log(e)
            })
        } 
        data()
            

    }


    return ( 
        <div className="create">
            <h2>Add new Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Task description</label>
                <textarea 
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label>Status</label>
                <select 
                value={status}
                onChange={(e) => setStatus(e.target.value)}>
                    <option>Not Started</option>
                    <option>Work in Progress</option>
                    <option>Done</option>
                </select>

                { !isPending && <button>Add Task</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;