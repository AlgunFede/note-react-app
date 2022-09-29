import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const CommentSection = () => {
    
    const { data: comments, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
    console.log(comments)
    return (
        <div className="blog-details">
            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }
            { comments && (
                <article>
                    
                    <h2>{ comments.email }</h2>
                    <div>{ comments.body }</div>

                </article>
            ) }
        </div>
    )

}

export default CommentSection;