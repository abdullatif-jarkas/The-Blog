import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "../slice";
import { slideReducer } from "../slice/slider";



const store = configureStore(
     { reducer :
        { blogs : blogReducer,
          slide : slideReducer,
        },
        
     });
     
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;