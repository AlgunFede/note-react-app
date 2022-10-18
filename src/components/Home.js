import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

const { data: tasks, isPending, error } = useFetch('https://noteit.fly.dev/task')

    return (  
            <div className="home">
                { error && <div> {error} </div> }
                { isPending && <div>Loading...</div> }
                { tasks && <BlogList tasks={tasks} title = "All Tasks" /> }
            </div>
        );
}
 
export default Home;