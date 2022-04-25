import { configureStore } from "@reduxjs/toolkit";
import page from "./page";
const store = configureStore({ reducer: { page } });
export default store;
