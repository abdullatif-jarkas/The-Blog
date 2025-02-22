import { createSlice } from "@reduxjs/toolkit";
import articles from "../../data/articles";

const initialState = {
    slide: articles,       
    currentPage: 1,      
    itemsPerPage: 6, 
};

export const blogsSlice = createSlice(
    {
        name: 'slide',
        initialState,
        reducers: {
            setPage: (state, action) => {
                state.currentPage = action.payload;
            },
        }
    }
)
export const { setPage } = blogsSlice.actions;

export const selectPaginatedArticles = (state: { slide: typeof initialState }) => {
    const { slide, currentPage, itemsPerPage } = state.slide;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return slide.slice(startIndex, endIndex).map(({id,mainTitle, mainImg ,category, introduction ,date ,author}) => ({
      id,  mainTitle, mainImg ,category, introduction ,date ,author
    }));
};

export const slideReducer = blogsSlice.reducer;