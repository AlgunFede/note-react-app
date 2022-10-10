import BlogList from './BlogList';
import useFetch from './useFetch';
import getTasks from './services/getTasks';

const Home = () => {

const { data: tasks, isPending, error } = useFetch('http://localhost:3000/task')

    return (  
            <div className="home">
                { error && <div> {error} </div> }
                { isPending && <div>Loading...</div> }
                { tasks && <BlogList tasks={tasks} title = "All Tasks" /> }
            </div>
        );
}
 
export default Home;