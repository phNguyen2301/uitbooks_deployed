import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'products';

const initialState = {
  products: [],
};
// fix object
export const getProduct = createAsyncThunk(
  `${namespace}/getProduct`,
  async (infoData) => {
    const {
      keyword,
      currentPage,
      price,
      category,
      ratings,
      author,
      publisher,
    } = infoData;

    const data = await ProductDataService.getAllBook(
      keyword,
      currentPage,
      price,
      category,
      ratings,
      author,
      publisher
    )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const productsSlice = createSlice({
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
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
      state.productsCount = action.payload.booksCount;
      state.resultPerPage = action.payload.resultPerPage;
      state.filteredProductsCount = action.payload.filteredBooksCount;
      state.error = action.payload.message;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors } = productsSlice.actions;

export default productsSlice.reducer;
