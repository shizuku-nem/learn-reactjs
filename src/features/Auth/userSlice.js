import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "contants/storage-keys";

// First, create the thunk. Bản chất bên dưới sd redux thunk middleware
// return resolved promise
// RTK export unwrapResult func that can be used to extract payload or error form action
// and return or throw the result
export const register = createAsyncThunk("user/register", async (payload) => {
  // call api to register
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  // return user data (day ra payload ben trong extractReducer)
  return data.user;
});
export const login = createAsyncThunk("user/login", async (payload) => {
  // call api to register
  const data = await userApi.login(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  // return user data (day ra payload ben trong extractReducer)
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)),
    settings: {},
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      // reset state.current
      state.current = {};
    },
  },
  // update
  extraReducers: {
    // 'user/register/fulfilled': () => {},
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const {logout} = actions
export default reducer; // default export
