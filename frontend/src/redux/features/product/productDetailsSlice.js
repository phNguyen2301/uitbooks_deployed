import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDataService from "../../../services/product";

const namespace = "productDetails";

const initialState = {
  product: {},
};
export const getProductDetails = createAsyncThunk(
  `${namespace}/getProduct`,
  async (id) => {
    // const { data } = await axios.get(
    //   `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`
    // );
    // console.log(data.book);
    // return data.book;
    const data = await ProductDataService.getDetailBook(id)
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
export const productDetailsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrorsDetails: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: {
    [getProductDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload.book;
      state.error = action.payload.message;
    },
    [getProductDetails.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrorsDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
