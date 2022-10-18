import { Link } from "react-router-dom";

const BlogList = (props) => {

    const posts = props.tasks;

    return (  
        <div className="tasks-content">
            <div className="title-task-content">
                <h3> Tasks: </h3>
            </div>
            { posts.length === 0 && <div className="empty-box">
                <p>Create a note!</p>
            </div> }
            <div className="blog-list">
                {
                    posts.map( (post) => (
                        <div className="blog-preview" key={post._id}>
                            <Link to={`task/${post._id}`}>
                                <div className="blog-preview-p">
                                    <p> { post.description } </p>
                                </div>
                                <div className="status-div">
                                    <p className="task-status"> { post.status } </p>
                                </div>
                            </Link>
                        </div>
                ))}
            </div>
        </div>
      );
}
 
export default BlogList;