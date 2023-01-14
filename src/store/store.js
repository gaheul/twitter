import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../slice";
//import {함수명} -> export  / import 함수명-> export default
export const store = configureStore({
  reducer: { data: dataSlice },
});
