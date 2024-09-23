import { createSlice } from "@reduxjs/toolkit";
import { elementos } from "../../Pages/Categorias/categoriasProducts";
import { productos } from "../../Pages/Resultados/allProducts";

const INITIAL_STATE = {
  categories: elementos,
  filteredProducts: productos,
  currentCategory: null,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    selectedCategory: (state, action) => {
      const category = action.payload;

      if (state.currentCategory === category) {
        state.filteredProducts = productos;
        state.currentCategory = null;
      } else {
        state.filteredProducts = productos.filter(
          (producto) => producto.categoria === category
        );
        state.currentCategory = category;
      }
    },
  },
});

export const { selectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
