import { createSlice } from "@reduxjs/toolkit";
// import tuits from './tuits.json';
import {deleteTuitThunk, findTuitsThunk,  createTuitThunk, updateTuitThunk,} from "../services/tuits-thunks";


const initialState = {
  tuits: [],
  loading: false
};

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
  "likes": 1,
}

const tuitsSlice = createSlice({
  name: 'tuits',
  // initialState: { tuits: tuits },
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
       (state) => {
          state.loading = true
          state.tuits = [] },
    [findTuitsThunk.fulfilled]:
       (state, { payload }) => {
          state.loading = false
          state.tuits = payload },
    [findTuitsThunk.rejected]:
       (state, action) => {
          state.loading = false
          state.error = action.error
    },

    [deleteTuitThunk.fulfilled] :
    (state, { payload }) => {
    state.loading = false
    state.tuits = state.tuits.filter(t => t._id !== payload)
  },
[createTuitThunk.fulfilled]:
  (state, { payload }) => {
      state.loading = false
      state.tuits.push(payload)},

[updateTuitThunk.fulfilled]:
  (state, { payload }) => {
      state.loading = false
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
      state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
}
 },
 

  reducers: {
    deleteTuit(state, action) {
      const index = state.tuits
         .findIndex(tuit =>
            tuit._id === action.payload);
      state.tuits.splice(index, 1);
    },
 
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },

    likeTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
      state[tuitIndex].liked = true;
      state[tuitIndex].likes += 1;
  },
unlikeTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
      state[tuitIndex].liked = false;
      state[tuitIndex].likes -= 1;
  }
  }

});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;