import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AdminService from "../../../services/admin";

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
  },
  reducers: {
    clear: (state, action) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(updateUserDetails.pending, (state, action) => {
        state.pending = false
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.pending = false
        state.success = action.payload.success
        state.user = action.payload.user
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.pending = true
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.pending = false
        state.success = action.payload.success
        state.message = action.payload.message
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.pending = false
        state.success = action.payload.success
        state.message = action.payload.message
      })
  },
});

export const getUserDetails = createAsyncThunk(
  "userDetails/getUserDetails",
  async ({ userId }) => {
    const response = await AdminService.getUserDetails(userId);
    return response.data;
  }
);

export const updateUserDetails = createAsyncThunk(
  "userDetails/updateUserDetails",
  async ({id, name, email, role, avatar}) => {
    const response = await AdminService.updateInfoUser(id, name, email, role, avatar)
    return response.data
  }
)

export const deleteUser = createAsyncThunk(
  "userDetails/deleteUser",
  async ({id}) => {
    const response = await AdminService.deleteUser(id)
    return response.data
  }
)

export const { clear } = userDetailsSlice.actions
export default userDetailsSlice.reducer;
