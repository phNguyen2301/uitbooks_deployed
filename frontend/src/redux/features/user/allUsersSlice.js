import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AdminService from '../../../services/admin';

export const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.user;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload.message
      });
  },
});

export const getAllUsers = createAsyncThunk(
  'allUsers/getAllUsers',
  async () => {
    const response = await AdminService.getAllUsers();
    return response.data;
  }
);

export default allUsersSlice.reducer;
