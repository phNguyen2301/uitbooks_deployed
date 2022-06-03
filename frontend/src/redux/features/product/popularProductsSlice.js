import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDataService from "../../../services/product";

const namespace = "popularProducts";

const initialState = {
  products: [],
};

export const getPopularProducts = createAsyncThunk(
  `${namespace}/getPopularProducts`,
  async () => {
    // const config = {
    //   headers: { "Content-Type": "application/json" },
    // };

    // const { data } = await axios.post(
    //   `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/new`,
    //   productData,
    //   config
    // );
    // console.log(data);
    // return data;
    const data = await ProductDataService.getPopularBook()
      .then((res) => {
        // console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        // console.log(err.response.data);
        return err.response.data;
      });
    return data;
  }
);
export const popularProducts = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
    resetState: (state, action) => {
      state.success = false;
    },
  },
  extraReducers: {
    //getPopularProducts
    [getPopularProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPopularProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
      state.success = action.payload.success;
      state.error = action.payload.message;
    },
    [getPopularProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors, resetState } = popularProducts.actions;

export default popularProducts.reducer;
