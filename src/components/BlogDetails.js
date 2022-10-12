import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {

    const { id } = useParams();
    const { data: post, isPending, error } = useFetch('http://localhost:3000/task/' + id);

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
        history('/create')
    }
    return ( 
        <div className="blog-details">
            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }
            { post && (
                <article>
                    
                    <h2>{ post.description }</h2>
                    <textarea 
                    required
                    placeholder="ARREGLA ESTO"
                    ></textarea>
                    <div>{ post.completed }</div>
                    <p> Written by { post.userId }</p>
                    <button onClick={ handleClick }>Delete</button>
                    <button className="edit-button" onClick={ handleEdit }>Edit</button>
                    
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;    console.log('LLEGO LA REQ')
