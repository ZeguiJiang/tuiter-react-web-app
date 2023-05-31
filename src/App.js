import logo from './logo.svg';
// import './App.css';
import Labs from "./labs";
import Assignment3 from './labs/a3';
import Assignment4 from './labs/a4';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router";

import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import NavigationSidebar from "./tuiter/navigation-sidebar";

function App() {
  return (
    <BrowserRouter>


      <div className="container"> 


        <Routes>
          <Route path="/"         element={<Navigate to="/labs"/>}/>    
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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />   
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
