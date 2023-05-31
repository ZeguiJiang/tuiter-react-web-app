// import logo from "./logo.svg";
// import Labs from "./labs";
import Assignment3  from "./a3";
import Nav from "../nav";

// import {Link} from "react-router-dom";

function Labs(){
    return(
        <div>
            {/* <h1> Labs </h1> */}
            {/* <Link to="/labs/a3">A3</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link> */}
            <Nav/>
            <Assignment3 />
            
        </div>
    );
} 
export default Labs;