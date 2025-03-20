import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    isAdmin: boolean;
  } | null;
}

const initialState: UserState = {
  isAuthenticated: !!localStorage.getItem("user"),
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ name: string; email: string; isAdmin: boolean }>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user"); // ✅ حذف بيانات المستخدم من localStorage عند تسجيل الخروج
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
