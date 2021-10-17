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
      const targetAple = state.apples.find((apple) => apple.id === id);
      targetAple.isDropped = isDropped;
      if (isDropped) {
        targetAple.top = "95%";
        targetAple.transition = transition;
      }
    },
    carry(state, action) {
      const { id, transition } = action.payload;
      const targetAple = state.apples.find((apple) => apple.id === id);
      const isDropped = targetAple.isDropped;
      const isCarried = targetAple.isCarried;

      if (isDropped && !isCarried) {
        targetAple.top = "95%";
        targetAple.transition = transition;
        targetAple.left = `${Math.random() * 5 + 90}vw`;
        targetAple.isCarried = true;
      }
    },
    reset(state, action) {
      return initialAppleState;
    },
  },
});

export default appleSlice;
