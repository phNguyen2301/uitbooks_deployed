import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AdminService from "../../../services/admin";

export const allOrdersSlice = createSlice({
  name: "allOrders",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false
        state.message = action.payload.message
      })
  },
});

export const getAllOrders = createAsyncThunk(
  "allOrders/getAllOrders",
  async () => {
    const response = await AdminService.getAllOrders();
    return response.data;
  }
);


export default allOrdersSlice.reducer;