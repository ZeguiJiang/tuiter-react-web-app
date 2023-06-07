import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
const TuitListItem = (
    {
        tuit = {
            "_id": 1232,
            "topic": "SpaceX",
            "userName": "SpaceX",
            "time": "2h",
            "avatar": "space.png",
            "liked": true,
            "handle": "@spacex",
            "tuits": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacegaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars",
            "replies": 10,
            "retuits": 432,
            "likes": 2345
            
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (tuit) => {
        dispatch(deleteTuit(tuit));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" alt="" src={`/images/${tuit.avatar}`} width={48} height={48}/>
                </div>

                <div className="col-11">
                    <span><strong>{tuit.userName}</strong></span>
                    <i className="fas fa-check-circle"></i>
                    <span className="text-dark">{tuit.handle}</span>
                    <span className="text-dark"> · </span>
                    <span className="text-dark">{tuit.time}</span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit)}></i>
                    <div>{tuit.tuits}</div>

                    {/*<div className="border border-dark rounded">*/}
                    {/*    <img className="border-bottom col-12" alt="" src={`/images/${tuit.image}`} width={504} height={264}/>*/}
                    {/*        <div>{tuit.imageTitle}</div>*/}
                    {/*        <div className="text-dark">{tuit.imageContent}</div>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="col-3">
                            <i className="text-dark fa fa-comment"></i>
                            <span className="text-dark">{tuit.stats.replies}</span>
                        </div>

                        <div className="col-3">
                            <i className="text-dark fas fa-random"></i>
                            <span className="text-dark">{tuit.stats.retuits}</span>
                        </div>

                        <div className="col-3">
                            {
                                tuit.liked === true &&
                                <i className="text-red fa fa-heart wd-icon-like"></i>
                            }
                            {
                                tuit.liked === false &&
                                <i className="text-red fa fa-heart"></i>
                            }
                            {/* <i className="text-red fa fa-heart wd-icon-like"></i> */}
                            <span className="text-dark">{tuit.stats.likes}</span>
                        </div>

                        <div className="col-3">
                            <i className="text-dark fa fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitListItem;

