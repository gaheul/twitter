import { createSlice } from "@reduxjs/toolkit";
const initialState = { list: [{ id: 0, test: "", img: "" }] };

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    save: (state, action) => {
      const nextId = state.list[state.list.length - 1].id + 1; //배열의 마지막요소의 id +1
      return {
        ...state,
        list: [...state.list, { ...action.payload, id: nextId }],
      };
    },
  },
});
export const { save } = dataSlice.actions;
export default dataSlice.reducer;
