import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {

    const { id } = useParams();
    console.log('ID de BlogDetails', id)
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
                console.log('Tarea borrada', res)
                history('/home')
            }).catch((e) => console.log("Something fail"))
    }

    return ( 
        <div className="blog-details">
            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }
            { post && (
                <article>
                    
                    <h2>{ post.description }</h2>
                    <div>{ post.completed }</div>
                    <p> Written by { post.userId }</p>
                    <button onClick={ handleClick }>Delete</button>
                    
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;