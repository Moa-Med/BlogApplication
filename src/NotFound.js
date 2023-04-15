import { Link } from "react-router-dom";
const NotFound = () => {

    return(
        <div className="not-found">
            <h2>Page cannot be found... :(</h2>
            <br/>
            <br/>
            <Link to={'/'}> Click <u>HERE</u> to go back to the Home page... :)</Link>
        </div>
    );
}
export default NotFound