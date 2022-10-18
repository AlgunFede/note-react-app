import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const link = process.env.REACT_APP_BASE_URL + '/task' || 'http://localhost:3000/task'
    const { data: tasks, isPending, error } = useFetch(link + '/task')
    console.log(process.env)
    return (  
            <div className="home">
                { error && <div> {error} </div> }
                { isPending && <div>Loading...</div> }
                { tasks && <BlogList tasks={tasks} title = "All Tasks" /> }
            </div>
        );
}
 
export default Home;