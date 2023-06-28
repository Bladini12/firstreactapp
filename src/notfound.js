import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>That page can not be found</p>
            <Link to = "/">Back to the home page...</Link>
        </div>
     );
}
 
export default Notfound;