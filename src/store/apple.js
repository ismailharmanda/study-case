import { createSlice } from "@reduxjs/toolkit";

//This function gives me coordinates between 30% and 70%
const giveRandomXCoordinate = () => {
  return (Math.random() * 40 + 30).toFixed(0);
};
//This function gives me coordinates between 10% and 50%
const giveRandomYCoordinate = () => {
  return (Math.random() * 40 + 10).toFixed(0);
};
const applesList = [
  {
    id: 1,
    top: `${giveRandomYCoordinate()}%`,
    left: `${giveRandomXCoordinate()}%`,
    isDropped: false,
    isCarried: false,
  },
  {
    id: 2,
    top: `${giveRandomYCoordinate()}%`,
    left: `${giveRandomXCoordinate()}%`,
    isDropped: false,
    isCarried: false,
  },
  {
    id: 3,
    top: `${giveRandomYCoordinate()}%`,
    left: `${giveRandomXCoordinate()}%`,
    isDropped: false,
    isCarried: false,
  },
  {
    id: 4,
    top: `${giveRandomYCoordinate()}%`,
    left: `${giveRandomXCoordinate()}%`,
    isDropped: false,
    isCarried: false,
  },
  {
    id: 5,
    top: `${giveRandomYCoordinate()}%`,
    left: `${giveRandomXCoordinate()}%`,
    isDropped: false,
    isCarried: false,
  },
  {
    id: 6,
    top: `${giveRandomYCoordinate()}%`,
    left: `${giveRandomXCoordinate()}%`,
    isDropped: false,
    isCarried: false,
  },
];

const initialAppleState = { apples: applesList, isShaking: false };

const appleSlice = createSlice({
  name: "apples",
  initialState: initialAppleState,
  reducers: {
    shake(state, action) {
      return { ...state, isShaking: action.payload };
    },
    drop(state, action) {
      const { id, isDropped, transition } = action.payload;
      state.apples[id].isDropped = isDropped;
      if (isDropped) {
        state.apples[id].top = "95%";
        state.apples[id].transition = transition;
      }
    },
    carry(state, action) {
      const { id, transition } = action.payload;
      const isDropped = state.apples[id].isDropped;
      const isCarried = state.apples[id].isCarried;

      if (isDropped && !isCarried) {
        state.apples[id].top = "95%";
        state.apples[id].left = `${Math.random() * 5 + 90}vw`;
        state.apples[id].transition = transition;
        state.apples[id].isCarried = true;
      }
    },
    reset(state, action) {
      return initialAppleState;
    },
  },
});

export default appleSlice;
