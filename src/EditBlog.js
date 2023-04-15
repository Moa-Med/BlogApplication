import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditBlog = (props) => {
    
    const blog = props.blog

    const [title,setTitle] = useState(blog.title);
    const [body,setBody] = useState(blog.body);
    const [author,setAuthor] = useState(blog.author);
    const navigate = useNavigate()  ;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const blogs = { title , body , author};
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(blogs)
        }).then(()=>{
            console.log('Blog edited')
            navigate('/')
        })
    }
    
    return ( 
         <div className="create">
         <h2>Edit Blog</h2>
        
         <form onSubmit={handleSubmit}>
             <label> Blog Title :</label>
             <input required  value={title} 
             onChange = {(e) => setTitle(e.target.value)} />

             <label>Blog Body :</label>
             <textarea required value = {body}
             onChange={(e)=> setBody(e.target.value)} />

             <label> Author</label>
             <select required value={author}
             onChange={(e)=>setAuthor(e.target.value)} >
                 <option value = 'Mooh'>Mooh</option>
                 <option value = 'Simo'>Simo</option>
                 <option value = 'Moamed'>Moamed</option>
             </select>
             <button> Edit Blog</button>
         </form>
     </div>
     );
}
 
export default EditBlog;