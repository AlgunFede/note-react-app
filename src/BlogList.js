import { Link } from "react-router-dom";

const BlogList = (props) => {

    const posts = props.posts;
    const title = props.title;

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