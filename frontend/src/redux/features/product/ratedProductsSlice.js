import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'ratedProducts';

const initialState = {
  products: [],
};

export const getRatedProducts = createAsyncThunk(
  `${namespace}/getRatedProducts`,
  async () => {
    const data = await ProductDataService.getRatedBook()
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
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
