import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {

    const [title , setTitle] =  useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('Simo');
    const navigate = useNavigate()  ;

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title , body , author};
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            navigate('/')
        })
    }


    return (  
        <div className="create">
            <h2>Add new Blog</h2>
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
                <button> Add Blog</button>
            </form>
        </div>
    );
}
 
export default CreateBlog;