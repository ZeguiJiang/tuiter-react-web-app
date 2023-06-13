import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
// import { RiHeartFill, RiHeartLine } from "react-icons/ri"
// import React, { useState } from "react";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import * as Icon from 'bootstrap-icons/font/bootstrap-icons.css';
import * as Icon from 'react-bootstrap-icons';

const TuitStats = (
    {tuit} 
) => {
    const dispatch = useDispatch();
    const clickLike = () => {
        const updatedTuit = {
            ...tuit,
            likes : tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked : !tuit.liked
        };
        dispatch(updateTuitThunk(updatedTuit))
    }

    const clickDislike = () => {
        const updatedTuit = {
            ...tuit,
            dislikes : tuit.disliked ? tuit.dislikes + 1 : tuit.dislikes - 1,
            disliked : !tuit.disliked
        };
        dispatch(updateTuitThunk(updatedTuit))
    }

   
    return(
        <>
            <div className="row text-secondary mt-3">
                <div className="col"><Icon.Chat/>
                    <span>     {tuit.replies}</span></div>
                <div className="col"><Icon.Repeat/>
                    <span>     {tuit.retuits}</span></div>
                <button className="col text-secondary border-0 bg-transparent text-start" onClick={clickLike}>
                    {tuit.liked && <Icon.HeartFill style={{color:"red"}}/>}
                    {!tuit.liked && <Icon.HeartFill style={{color:"gray"}} />}
                    <span>{tuit.likes}</span>
                </button>
                <button className="col text-secondary border-0 bg-transparent text-start" onClick={clickDislike}>
                    {tuit.disliked && <Icon.HandThumbsDownFill style={{color:"darkgray"}}/>}
                    {!tuit.disliked && <Icon.HandThumbsDownFill style={{color:"gray"}}/>}
                    <span>{tuit.dislikes}</span>
                </button>

                <button className="col text-secondary border-0 bg-transparent text-start">
                    <Icon.Share  />
                </button>
            </div>
        </>
    )
}
export default TuitStats;




// const TuitStats = ({ replies, retuits, likes }) => {

//   const [isLiked, setIsLiked] = useState(true);
//   const [likesCount, setLikesCount] = useState(likes);
//   const dispatch = useDispatch();

//   const handleLike = () => {
//     if (isLiked) {
//       setLikesCount(likesCount - 1);
//     } else {
//       setLikesCount(likesCount + 1);
//     }
//     setIsLiked(!isLiked);
//   };

  
//   return (
//     <div className="row">
//       <div className="col-3">
//         <span className="mr-1">
//           <i className="bi bi-chat-left"></i>
//         </span>
//         <span> {replies}</span>
//       </div>
//       <div className="col-3">
//         <span className="mr-1">
//           <i className="bi bi-arrow-repeat"></i>
//         </span>
//         <span> {retuits}</span>
//       </div>
//       {/* <div className="col-3">
//         <span
//           className={isLiked ? 'text-danger mr-1' : 'mr-1'}
//           onClick={handleLike}
//           style={{ cursor: 'pointer' }}
//         >
//           <i className={isLiked ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
//         </span>
//         <span> {likesCount}</span>
//       </div> */}

//       <div className="col">
//         {isLiked ? (<RiHeartFill color="red" onClick={() => dispatch(updateTuitThunk({ likes: likesCount + 1 }))} />) :
//           (<RiHeartLine onClick={() => dispatch(updateTuitThunk({ likes: likesCount + 1 }))} />)}
//         <span className="ms-2">{likesCount}</span>
//       </div>


//       <div className="col-3">
//         <span className="mr-1">
//           <i className="bi bi-upload"></i>
//         </span>
//       </div>
//     </div>
//   );
// };
// export default TuitStats;