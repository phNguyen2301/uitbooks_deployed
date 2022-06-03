import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AdminService from "../../../services/admin";

export const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {},
  reducers: {
    clear: (state, action) => {
      state.success = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload.order;
      })
      .addCase(updateStatusOrder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateStatusOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
      })
      .addCase(deleteOrder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
      });
  },
});

export const getOrder = createAsyncThunk(
  "orderDetails/getOrder",
  async ({ id }) => {
    const response = await AdminService.getOrder(id);
    // console.log("order detail", response);
    return response.data;
  }
);
export const updateStatusOrder = createAsyncThunk(
  "orderDetails/updateStatusOrder",
  async ({ id, orderStatus }) => {
    const response = await AdminService.updateOrder(id, orderStatus);
    // console.log("update status", response);
    return response.data;
  }
);
export const deleteOrder = createAsyncThunk(
  "orderDetails/deleteOrder",
  async ({ id }) => {
    const response = await AdminService.deleteOrder(id);
    return response.data;
  }
);

export const { clear } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
