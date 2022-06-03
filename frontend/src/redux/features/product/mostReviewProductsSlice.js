import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDataService from "../../../services/product";

const namespace = "mostReviewProducts";

const initialState = {
  products: [],
};

export const getMostReviewProducts = createAsyncThunk(
  `${namespace}/getMostReviewProducts`,
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
    const data = await ProductDataService.getMostReviewProducts()
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
export const mostReviewProducts = createSlice({
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
    //getMostReviewProducts
    [getMostReviewProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getMostReviewProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
      state.success = action.payload.success;
      state.error = action.payload.message;
    },
    [getMostReviewProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors, resetState } = mostReviewProducts.actions;

export default mostReviewProducts.reducer;
