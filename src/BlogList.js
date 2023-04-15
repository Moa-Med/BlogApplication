import { Link } from "react-router-dom";

/** This component is only the blogs list inside our json file */

const BlogList = (props) => {

    const blogs = props.blogs
    return ( 
        <div className="blog-list">
            
            {
                blogs.map((blog)=> (
                    <div className="blog-preview" key={blog.id}>
                        <Link to = {`/blogs/${blog.id}`} >
                            <h2>{blog.title}</h2>
                            <p>Written by : <b>{blog.author}</b></p>
                        </Link>
                    </div>
                ))
            }
            
        </div>
     );
}
 
export default BlogList;