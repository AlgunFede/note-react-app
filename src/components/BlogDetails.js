import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const BlogDetails = () => {

    const { id } = useParams();
    const { data: post, isPending, error } = useFetch('http://localhost:3000/task/' + id);

    const [enableEdit, setEnableEdit] = useState(false)
    // Get token
    const token = window.localStorage.getItem('loggedTaskAppUser');

    const config = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${JSON.parse(token)}`
        }
    }

    const history = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:3000/task/' + id, config)
            .then( (res) => {
                history('/home')
            }).catch((e) => console.log("Something fail"))
    }

    const handleEdit = () => {
        setEnableEdit(true)
    }

    return ( 
        
        <div className="blog-details">
            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }
            { post && (
                <article>
                    
                    { !enableEdit && <h2>{ post.description }</h2>}
                    { enableEdit && <textarea>{ post.description }</textarea> }
                    <p>{ post.status }</p>
                    <p> Created: { Date(post.createdAt) }</p>
                    <button onClick={ handleClick }>Delete</button>
                    <button className="edit-button" onClick={ handleEdit }>Edit</button>
                    
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;
