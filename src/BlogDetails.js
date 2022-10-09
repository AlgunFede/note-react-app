import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {

    const { id } = useParams();
    const { data: post, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);


    const history = useNavigate();

        const handleClick = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, {
                method: 'DELETE'
            }).then( () => {
                console.log("Deleted")
                history('/')
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