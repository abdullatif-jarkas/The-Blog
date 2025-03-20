import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "../slice";
import { slideReducer } from "../slice/slider";
import authReducer from "../slice/authSlice"; 

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    slide: slideReducer,
    auth: authReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
