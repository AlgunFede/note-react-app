import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Create = () => {

    const { id } = useParams()
    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, body };
        setIsPending(true);
        
        fetch(`https://jsonplaceholder.typicode.com/posts/`, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then((e) => {
            console.log("Post added!")
            setIsPending(false)
            history('/');
        }).catch(e => console.log("Failed"))

    }


    return ( 
        <div className="create">
            <h2>Add new Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;