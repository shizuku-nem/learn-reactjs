import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

// First, create the thunk. Bản chất bên dưới sd redux thunk middleware
// return resolved promise
// RTK export unwrapResult func that can be used to extract payload or error form action
// and return or throw the result
export const register = createAsyncThunk("user/register", async (payload) => {
  // call api to register
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));

  // return user data (day ra payload ben trong extractReducer)
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  // update
  extraReducers: {
    // 'user/register/fulfilled': () => {},
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer; // default export
