import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const link = process.env.REACT_APP_BASE_URL
    const { data: tasks, isPending, error } = useFetch(link + '/task')
    return (  
            <div className="home">
                { error && <div> {error} </div> }
                { isPending && <div>Loading...</div> }
                { tasks && <BlogList tasks={tasks} title = "All Tasks" /> }
            </div>
        );
}
 
export default Home;