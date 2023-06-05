import React from "react";
import {useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    return (
        // <h1>askhd</h1>
        
        <ul className="list-group">
            {
                tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    )
}
export default TuitList;