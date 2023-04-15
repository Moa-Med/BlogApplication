import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import EditBlog from './EditBlog';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
            <Route index element={ <Home/>}   /> 
            <Route path='/create' element={ <CreateBlog />}   />  
            <Route path ='/blogs/:id' element = {<BlogDetails />} />
            <Route path='/edit/:id' element = {<EditBlog />} />
            <Route path='*' element = {<NotFound />} />
      </Routes>  
           </div>  
    </div>
    </Router>
  );
}

export default App;
