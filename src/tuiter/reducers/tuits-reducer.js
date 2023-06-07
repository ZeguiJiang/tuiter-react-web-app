import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuit-summary-list/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
   };

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits },
 reducers: {
    deleteTuit(state, action) {
        const index = state.findIndex(tuit => tuit._id === action.payload._id);
        state.splice(index, 1);
    },
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
   
  }
 
});

export const {createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;