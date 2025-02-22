import { createSelector, createSlice } from "@reduxjs/toolkit";
import articles from "../../data/articles";
import moon from './../../assets/btnDark/moon.png';
import moon1 from './../../assets/btnDark/moon-1.png';
import sun1 from './../../assets/btnDark/sun-1.png';
import sun from './../../assets/btnDark/sun.png';

interface Subsection {
    title: string; 
    image: string; 
    imgDes: string;
    description: string; 
    description1: string; 
    description2: string; 
    description3: string; 
    title2: string
}


interface Article {
    id: number;
    mainTitle: string;
    mainImg: string;
    category: string[];
    introduction: string;
    date: string;
    author: string;
    day:string;
    subsections: Subsection[]
    description: string
}

const initialState = {
    blogs: articles,
    darkMode: false,
    icons: {
        sun,
        moon: moon1,
    },

};

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            const isDark = state.darkMode;
            state.icons.sun = isDark ? sun1 : sun;
            state.icons.moon = isDark ? moon : moon1;
        },

    },
});

export const selectLatestArticles = createSelector(
    (state: { blogs: { blogs: Article[] } }) => state.blogs.blogs,
    (articles) => articles.slice(-4).map(({ id, mainTitle, mainImg, category, introduction, date, author }) => ({
        id,
        mainTitle,
        mainImg,
        category,
        introduction,
        date,
        author,
    }))
);

export const selectSelectedArticle = (state: { blogs: { selectedArticle: Article | null } }) => state.blogs.selectedArticle;
export const selectPostById = createSelector(
    (state: { blogs: { blogs: Article[] } }, postId: number) => ({
        articles: state.blogs.blogs,
        postId
    }),
    ({ articles, postId }) => articles.find(article => article.id === postId) || null
);

export const showOtherPosts = createSelector(
    (state: { blogs: { blogs: Article[] } }, postId: number) => ({
        articles: state.blogs.blogs,
        postId
    }),
    ({ articles, postId }) => articles
        .filter(article => article.id !== postId) 
        .slice(0, 9) 
);

export const { toggleDarkMode  } = blogsSlice.actions;
export const blogReducer = blogsSlice.reducer;
