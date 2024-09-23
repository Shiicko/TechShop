import { createSlice } from "@reduxjs/toolkit";
import { Productos, totalProductos } from "../../Pages/Resultados/allProducts";

const INITIAL_STATE = {
  products: Productos,
  totalProductos: totalProductos,
};

export const productsSlice = createSlice({
  name: "productos",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => state,
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
