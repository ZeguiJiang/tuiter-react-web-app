import React from "react";
import {useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";

// const TuitList = () => {
//     const tuits = useSelector(state => state.tuits);
//     console.log(tuits);
//     console.log("tuits");
//     return (
//         // <h1>askhd</h1>
        
//         <ul className="list-group">
//             {
//                 tuits.map((tuit) => <TuitListItem key={tuit._id} tuit={tuit}/>)
//                 // tuits.map((tuit) => (
//                 //     <div key={tuit._id}>
//                 //       <TuitItem tuit={tuit} />
//                 //     </div>
//                 //   ))
//             }
//         </ul>
//     )
// }


const TuitList = () => {
    const tuits = useSelector(state => state.tuits["tuits"]);
    // console.log(tuits);
    // console.log(tuits["tuits"]);
    return (
        
        <ul className="list-group">
            {/* <h1>askhd</h1> */}
            {
                tuits.map((tuit) => <TuitListItem key={tuit._id} tuit={tuit}/>)
                // tuits[0]["time"]
            }
        </ul>
    )
}

export default TuitList;