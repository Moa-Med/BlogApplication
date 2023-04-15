import BlogList from "./BlogList";
import useFetch from "./useFetch";

/** This component contain our blog list and shows if there 
 * is any error with the server or app
 */

const  Home = () => {

    /**this const return from two values based on the server path
     * which fetches from the useFetch component 
     */
    const {data: blogs , error} = useFetch('http://localhost:8000/blogs')
    return (  
        <div className="home">
            <h1> Home </h1>
            { error && <div> { error} </div>}
            { blogs && <BlogList blogs ={blogs} /> }
        </div>
    );
}
 
export default Home ;