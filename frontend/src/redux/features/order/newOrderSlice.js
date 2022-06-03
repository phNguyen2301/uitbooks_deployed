import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const namespace = "newOrder";

const initialState = {
  loading: null,
  err: null,
  success: null,
  order: {},
};

export const createOrder = createAsyncThunk(
  `${namespace}/createOrder`,
  async (order, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const { data } = await axios.post(
        "/api/v2/order/new",
        order,
        config
      );
      return data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const newOrderSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clear: (state, action) => {
      state.error = null;
      state.message = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload.order;
        state.success = action.payload.success;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload.message;
      });
  },
});

export default newOrderSlice.reducer;
