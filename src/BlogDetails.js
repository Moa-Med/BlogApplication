import { useParams , useNavigate} from "react-router-dom";
import useFetch from "./useFetch";
import EditBlog from "./EditBlog";
import { useState } from "react";

const BlogDetails = () => {

    const {id} = useParams();
    const {data : blog, error } = useFetch ('http://localhost:8000/blogs/' + id); 
    const navigate = useNavigate();
    const [edit,setEdit]= useState(false);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }
    const handleEdit = () => {
         setEdit(true);  
    }
    return ( 
        <div className="blog-details">
            <h2>Blog details -{id}</h2>
             {error && <div>{error}</div>}
             { blog && (
                <article>
                    <h2>Title - {blog.title}</h2>
                    <p>Written by : <b>{ blog.author}</b></p>
                    <div> {blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleEdit}> Edit </button>
                </article>
             )}
             { edit && <EditBlog blog ={blog} />  }
        </div>
     );
}
 
export default BlogDetails;