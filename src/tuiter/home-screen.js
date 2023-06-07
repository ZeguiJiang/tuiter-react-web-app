import React from "react";
import WhatsHappening from "./whats-happening";
import TuitList from "./tuits/";
// import TuitList from "../tuits";

function HomeScreen() {
    
    return (    
    <>
        <h4>Home</h4>
        <WhatsHappening/>
        {/* <TuitsList/> */}
        <TuitList/>
    </>
    )

   }
   export default HomeScreen;
   