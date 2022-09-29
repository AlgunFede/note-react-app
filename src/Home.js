import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {

const { data: posts, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts/')

    return (  
        <div className="home">
            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }
            { posts && <BlogList posts= {posts} title = "All posts" /> }
        </div>
    );
}   
 
export default Home;