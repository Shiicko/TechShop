import { configureStore, combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./CategoriesSlices/CategorySlice";
import productosReducer from "./ProductosSlice/Productos.slice";
import recommendedReducer from "./Recommended/recommendedSlice";
import cartReducer from "./CarritoSlices/cartSlice";

const reducers = combineReducers({
  categories: categoriesReducer,
  productos: productosReducer,
  recommended: recommendedReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
