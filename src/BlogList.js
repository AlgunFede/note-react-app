import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogList = (props) => {

    const posts = props.posts;
    const title = props.title;
    const history = useNavigate();

    return (  
        <div className="blog-list">
            <h2> { title } </h2>
            { posts.map( (post) => (
                <div className="blog-preview" key={post.id}>
                    
                    <Link to={`posts/${post.id}`}>
                        <h2> { post.title } </h2>
                        <p> Written by {post.userId} </p>
                    </Link>

                </div>
            ))}
        </div>
      );
}
 
export default BlogList;