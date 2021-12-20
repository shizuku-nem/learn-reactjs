import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userApi from "api/userApi";

// First, create the thunk
const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    // call api to register

    // save data to local storage

    return {}
  }
)
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {
    
  },
  // update
  extractReducers: {
    // 'user/register/fulfilled': () => {},
    [register.fulfilled]: (state, action) => {
      
    },
  }
});

const { reducer } = userSlice;
export default reducer; // default export
