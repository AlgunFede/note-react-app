import { Link } from "react-router-dom";

const BlogList = (props) => {

    const posts = props.tasks;
    const task = props.description;

    return (  
        <div className="blog-list">
            <h2> { task } </h2>
            { posts.map( (post) => (
                <div className="blog-preview" key={post._id}>
                    <Link to={`task/${post._id}`}>
                        <h2> { post.description } </h2>
                        <p> Completed: { post.status } </p>
                    </Link>
                </div>
            ))}
        </div>
      );
}
 
export default BlogList;