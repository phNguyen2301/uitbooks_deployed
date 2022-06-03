import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDataService from "../../../services/product";

const namespace = "ratedProducts";

const initialState = {
  products: [],
};

export const getRatedProducts = createAsyncThunk(
  `${namespace}/getRatedProducts`,
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
    const data = await ProductDataService.getRatedBook()
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
export const ratedProducts = createSlice({
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
    //getRatedProducts
    [getRatedProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getRatedProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
      state.success = action.payload.success;
      state.error = action.payload.message;
    },
    [getRatedProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors, resetState } = ratedProducts.actions;

export default ratedProducts.reducer;
