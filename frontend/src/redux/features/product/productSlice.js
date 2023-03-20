import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';
const namespace = 'product';

const initialState = {
  // loading: null,
  // product: {},
  // isDeleted: null,
  // isUpdated: null,
  // err: "",
};

export const updateProduct = createAsyncThunk(
  `${namespace}/updateProduct`,
  async (productData) => {
    const { id, info } = productData;

    const data = await ProductDataService.updateBook(id, info)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const deleteProduct = createAsyncThunk(
  `${namespace}/deleteProduct`,

  async (id) => {
    const data = await ProductDataService.deleteBook(id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const productSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrorsDeleted: (state, action) => {
      state.error = null;
    },
    resetStateUpdated: (state, action) => {
      state.isUpdated = false;
    },
    resetStateDelete: (state, action) => {
      state.isDeleted = false;
    },
  },
  extraReducers: {
    [updateProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload.success;
      state.error = action.payload.message;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload.success;
      state.error = action.payload.message;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.message;
    },
  },
});
export const { clearErrorsDeleted, resetStateUpdated, resetStateDelete } =
  productSlice.actions;

export default productSlice.reducer;
