import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'newProduct';

const initialState = {
  product: {},
};

export const createProduct = createAsyncThunk(
  `${namespace}/createProduct`,
  async (productData) => {
    const data = await ProductDataService.createBook(productData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const newProductSlice = createSlice({
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
    //createProduct
    [createProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload.book;
      state.success = action.payload.success;
      state.error = action.payload.message;
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors, resetState } = newProductSlice.actions;

export default newProductSlice.reducer;
