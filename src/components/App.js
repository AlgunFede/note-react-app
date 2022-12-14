import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import LoginPage from './LoginPage'
import Profile from './Profile';
import SignUp from './SignUp';

function App() {
  return (
  <Router>
    <div className="App">
     <Navbar/>
      <div className="content">
      <Routes>     
          <Route exact path='/' element= {<LoginPage/>}>
          </Route>
          <Route exact path="/home" element= {<Home />}>
          </Route>
          <Route path="/create" element= {<Create/>}>
          </Route>  
          <Route path="home/task/:id" element = {<BlogDetails/>}>
          </Route>  
          <Route path="/profile" element = {<Profile/>}>
          </Route>  
          <Route path="/signup" element = {<SignUp/>}>
          </Route>  
          <Route path="*" element= {<NotFound/>}>
          </Route>  
      </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;

