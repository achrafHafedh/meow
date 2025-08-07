import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cat } from "@/types";

interface CatsState {
  list: Cat[];
  cutestCat: Cat | null;
  catToCompare: Cat | null;
}

const initialState: CatsState = {
  list: [],
  cutestCat: null,
  catToCompare: null,
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    initStore(state, action: PayloadAction<Cat[]>) {
      state.list = action.payload;
      state.cutestCat = action.payload[0];
      state.catToCompare = action.payload[1];
    },
    setCats(state, action: PayloadAction<Cat[]>) {
      state.list = action.payload;
    },
    setCutestCat(state, action: PayloadAction<Cat>) {
      state.cutestCat = action.payload;
    },
    setCatToCompare(state, action: PayloadAction<Cat>) {
      state.catToCompare = action.payload;
    },
    addScore(state, action: PayloadAction<{ id: string }>) {
      const cat = state.list.find((cat) => cat.id === action.payload.id);
      if (cat) {
        cat.score += 1;
      }
    },
  },
});

export const { initStore, setCats, setCutestCat, setCatToCompare, addScore } =
  catsSlice.actions;
export default catsSlice.reducer;
