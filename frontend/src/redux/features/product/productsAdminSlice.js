import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'productsAdmin';

const initialState = {
  products: [],
};
// fix object
export const getProductsAdmin = createAsyncThunk(
  `${namespace}/getProductsAdmin`,
  async () => {
    const data = await ProductDataService.getAllBookAdmin()
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const productsAdminSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
    // resetState: (state, action) => {
    //   state.success = false;
    // },
  },
  extraReducers: {
    [getProductsAdmin.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductsAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
      state.error = action.payload.message;
    },
    [getProductsAdmin.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors } = productsAdminSlice.actions;

export default productsAdminSlice.reducer;
