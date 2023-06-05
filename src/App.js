import Labs from "./labs";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";

function App() {
  return (
    <BrowserRouter>


      <div className="container"> 


        <Routes>
          <Route path="/"         element={<Navigate to="/labs/a4"/>}/>    
          <Route path="/labs/*"  element={<Labs />} />
          {/* <Route path="/labs/a3"  element={<Assignment3 />} /> */}
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>  

        {/* <h1> Welcome to Web Dev! </h1> */}


        {/* <Labs /> */}


        {/* <HelloWorld/> */}
        {/* <Assignment3 /> */}
        {/* <Assignment4 /> */}
        {/* <Tuiter/>/ */}


      </div>


      </BrowserRouter>
  ); 
}

export default App;
