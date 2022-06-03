import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserDataService from "../../../services/user";

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    status: null
  },
  reducers: {
    clearMessage: (state, action) => {
      state.message = null;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.message = action.payload.message
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.status = false;
        state.message = action.payload.message
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.success;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.status = action.payload.success;
      });
  },
});

export const forgotPassword = createAsyncThunk(
  "forgotPassword/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await UserDataService.forgotPassword(email)
      return response.data
    } catch(err) {
      if(!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const resetPassword = createAsyncThunk(
  "forgotPassword/resetPassword",
  async ({ password, confirmPassword, token }, { rejectWithValue }) => {
    try {
      const response = await UserDataService.resetPassword(password, confirmPassword, token)
      return response.data
    } catch(err) {
      if(!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const { clearMessage } = forgotPasswordSlice.actions
export default forgotPasswordSlice.reducer;
