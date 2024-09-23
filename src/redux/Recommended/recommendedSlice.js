import { pickRandom } from "../../utils/pickRandom";
import { productos } from "../../Pages/Resultados/allProducts";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  recommended: pickRandom(productos, 4),
};

export const recommendedSlice = createSlice({
  name: "recommended",
  initialState: INITIAL_STATE,
  reducers: {
    randomRecommended: (state) => state,
  },
});

export const { randomRecommended } = recommendedSlice.actions;

export default recommendedSlice.reducer;
