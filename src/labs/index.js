// import logo from "./logo.svg";
// import Labs from "./labs";
import Assignment3  from "./a3";
import Assignment4 from "./a4";
import Nav from "../nav";
import { Routes, Route } from "react-router";

// import {Link} from "react-router-dom";

function Labs(){
    return(
        <div>
            {/* <h1> Labs </h1> */}
            {/* <Link to="/labs/a3">A3</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link> */}
            <Nav/>
            {/* <Assignment3 />
            <Assignment4 /> */}
     <Routes>
       <Route path="a3"
        element={<Assignment3/>}/>
       <Route path="a4"
        element={<Assignment4/>}/>
     </Routes>
            
        </div>
    );
} 
export default Labs;